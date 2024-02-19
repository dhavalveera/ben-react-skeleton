// React Router DOM
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

const LinkButton = ({btnType = 'button', btnLabel, btnVariant = 'primary', linkHref, btnSize = 'sm'}) => {
    return (
        <Link to={linkHref} aria-label={`${btnLabel}`} role='link'>
            <Button type={btnType} variant={btnVariant} size={btnSize} role='button'>
                {btnLabel}
            </Button>
        </Link>
    )
}