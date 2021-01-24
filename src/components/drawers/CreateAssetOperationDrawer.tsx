import {
    Drawer,
    Form,
    Button,
    Col,
    Row,
    Radio,
    message,
    InputNumber,
    DatePicker,
    Select,
    Input,
} from "antd"
import { PlusOutlined } from "@ant-design/icons"
import React, { useState } from "react"
import styled from "styled-components"
import {
    usePortfoliosQuery,
    useBuyAssetMutation,
    useSellAssetMutation,
} from "finance-types"
import ru_RU from "antd/es/date-picker/locale/ru_RU"
import Loading from "components/loading/Loading"

const { Option } = Select

const Footer = styled.div`
    text-align: left;
    padding: 10px 20px;
`

const Icon = styled.img`
    display: inline-block;
    height: 21.6px;
    margin-right: 5px;
`

type propTypes = {
    update: () => void
}

const CreateAssetOperationDrawer: React.FC<propTypes> = (props) => {
    const { data, loading, error } = usePortfoliosQuery()
    const [buyMutation, buyPayload] = useBuyAssetMutation()
    const [sellMutation, sellPayload] = useSellAssetMutation()

    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm()

    const showDrawer = () => {
        setVisible(true)
    }
    const onClose = () => {
        setVisible(false)
    }

    const clickSubmitButton = () => {
        form.submit()
    }

    const onSubmit = async (values: any) => {
        const type = values.type

        if (type === 1) {
            const response = await buyMutation({
                variables: {
                    portfolioId: values.portfolioId,
                    date: values.date.format(),
                    price: Math.round(values.price * 100),
                    amount: values.amount,
                    assetTypeId: values.assetTypeId,
                    ticket: values.ticket,
                },
            })

            const result = response.data?.buyAsset
            if (result?.isSuccess) {
                message.success(result?.message)
                props.update()
            } else {
                message.error(result?.message)
            }
        } else {
            const response = await sellMutation({
                variables: {
                    portfolioId: values.portfolioId,
                    date: values.date.format(),
                    price: Math.round(values.price * 100),
                    amount: values.amount,
                    assetTypeId: values.assetTypeId,
                    ticket: values.ticket,
                },
            })

            const result = response.data?.sellAsset
            if (result?.isSuccess) {
                message.success(result?.message)
                props.update()
            } else {
                message.error(result?.message)
            }
        }
    }

    const getPortfolios = () => {
        if (loading) return <Loading />

        const portfolios = data?.portfolios?.map((portfolio) => {
            return (
                <Radio.Button value={portfolio?.id} key={portfolio?.id}>
                    <Icon src={portfolio?.portfolioType?.iconUrl || ""} />{" "}
                    {portfolio?.name}
                </Radio.Button>
            )
        })

        return <Radio.Group size="large">{portfolios}</Radio.Group>
    }

    if (error) message.error(error.message)
    if (buyPayload.error) message.error(buyPayload.error.message)
    if (sellPayload.error) message.error(sellPayload.error.message)

    return (
        <>
            <Button type="primary" icon={<PlusOutlined />} onClick={showDrawer}>
                Добавить операцию
            </Button>
            <Drawer
                title="Добавление операции по активам"
                width={720}
                onClose={onClose}
                visible={visible}
                footer={
                    <Footer>
                        <Button
                            htmlType="submit"
                            type="primary"
                            size="large"
                            onClick={() => clickSubmitButton()}
                            style={{ width: 200 }}
                            loading={sellPayload.loading || buyPayload.loading}
                            icon={<PlusOutlined />}
                        >
                            Добавить
                        </Button>
                        <Button
                            onClick={onClose}
                            style={{ marginLeft: 15 }}
                            size="large"
                        >
                            Отмена
                        </Button>
                    </Footer>
                }
            >
                <Form
                    layout="vertical"
                    form={form}
                    onFinish={onSubmit}
                    hideRequiredMark
                >
                    <Row gutter={24}>
                        <Col span={24}>
                            <Form.Item
                                name="type"
                                label="Тип операции"
                                rules={[
                                    {
                                        required: true,
                                        message: "Выберите тип операции",
                                    },
                                ]}
                                initialValue={1}
                            >
                                <Select size="large">
                                    <Option value={1}>Покупка</Option>
                                    <Option value={2}>Продажа</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={16}>
                            <Form.Item
                                name="ticket"
                                label="Тикет"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите тикет",
                                    },
                                ]}
                            >
                                <Input placeholder="Тикет" size="large" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="amount"
                                label="Количество"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите количество",
                                    },
                                ]}
                            >
                                <InputNumber
                                    min={1}
                                    placeholder="1"
                                    size="large"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Form.Item
                                name="assetTypeId"
                                label="Тип актива"
                                rules={[
                                    {
                                        required: true,
                                        message: "Выберите тип актива",
                                    },
                                ]}
                                initialValue={1}
                            >
                                <Select size="large">
                                    <Option value={1}>Акция</Option>
                                    <Option value={2}>Фонд</Option>
                                    <Option value={3}>Облигация</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24}>
                        <Col span={16}>
                            <Form.Item
                                name="date"
                                label="Дата"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите дату",
                                    },
                                ]}
                            >
                                <DatePicker
                                    locale={ru_RU}
                                    style={{ width: "100%" }}
                                    format="DD.MM.YYYY"
                                    size="large"
                                    getPopupContainer={(trigger) =>
                                        trigger.parentElement ?? trigger
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="price"
                                label="Сумма"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите сумму",
                                    },
                                ]}
                                initialValue={0}
                            >
                                <InputNumber
                                    min={1}
                                    precision={2}
                                    formatter={(value) => `${value} ₽`}
                                    decimalSeparator=","
                                    placeholder="0.0"
                                    size="large"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="portfolioId"
                                label="Портфель"
                                rules={[
                                    {
                                        required: true,
                                        message: "Выберите портфель",
                                    },
                                ]}
                            >
                                {getPortfolios()}
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    )
}

export default CreateAssetOperationDrawer
