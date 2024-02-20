import Button from 'react-bootstrap/Button'

const CommonButton = ({btnType = 'button', btnLabel, btnVariant = 'primary', btnSize='lg', onClick = null}) => {
    return (
        <Button type={btnType} variant={btnVariant} size={btnSize} role='button' onClick={onClick}>
            {btnLabel}
        </Button>
    )
}

export default CommonButton