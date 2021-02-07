import Avatar from "antd/lib/avatar/avatar"
import React from "react"

type propTypes = {
    ticket: string
}

const AssetIcon: React.FC<propTypes> = (props) => {
    return (
        <Avatar
            src={`https://storage.badeev.info/tickets/${props.ticket}.svg`}
            size="small"
        >
            {props.ticket[0]}
        </Avatar>
    )
}

export default AssetIcon
