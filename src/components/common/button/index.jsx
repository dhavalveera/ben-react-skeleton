import Button from 'react-bootstrap/Button'

const CommonButton = ({btnType = 'button', btnLabel, btnVariant = 'primary', btnSize='lg'}) => {
    return (
        <Button type={btnType} variant={btnVariant} size={btnSize} role='button'>
            {btnLabel}
        </Button>
    )
}

export default CommonButton