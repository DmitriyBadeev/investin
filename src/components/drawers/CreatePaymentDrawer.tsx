import {
    Drawer,
    Form,
    Button,
    Col,
    Row,
    Input,
    Radio,
    message,
    InputNumber,
    DatePicker,
} from "antd"
import { PlusOutlined } from "@ant-design/icons"
import React, { useState } from "react"
import styled from "styled-components"
import {
    usePortfoliosQuery,
    useAddPaymentInPortfolioMutation,
} from "finance-types"
import ru_RU from "antd/es/date-picker/locale/ru_RU"
import Loading from "components/loading/Loading"

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

const CreatePaymentDrawer: React.FC<propTypes> = (props) => {
    const { data, loading, error } = usePortfoliosQuery()
    const [mutation, paymentPayload] = useAddPaymentInPortfolioMutation()

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
        const response = await mutation({
            variables: {
                ticket: values.ticket,
                portfolioId: values.portfolioId,
                amount: values.amount,
                date: values.date.format(),
                paymentValue: Math.round(values.paymentValue * 100),
            },
        })

        const result = response.data?.addPaymentInPortfolio
        if (result?.isSuccess) {
            message.success(result?.message)
            props.update()
        } else {
            message.error(result?.message)
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
    if (paymentPayload.error) message.error(paymentPayload.error.message)

    return (
        <>
            <Button type="primary" icon={<PlusOutlined />} onClick={showDrawer}>
                Добавить выплату
            </Button>
            <Drawer
                title="Добавление выплаты"
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
                            loading={paymentPayload.loading}
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
                                    size="large"
                                    format="DD.MM.YYYY"
                                    getPopupContainer={(trigger) =>
                                        trigger.parentElement ?? trigger
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="paymentValue"
                                label="Общая выплата"
                                rules={[
                                    {
                                        required: true,
                                        message: "Введите цену",
                                    },
                                ]}
                            >
                                <InputNumber
                                    min={1}
                                    precision={2}
                                    defaultValue={0}
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

export default CreatePaymentDrawer
