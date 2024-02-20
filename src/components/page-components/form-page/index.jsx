import { useState } from 'react'

// React Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// Common
import CommonButton from '../../common/button'

// Tab Component
import TabDetails from './tab-details'

const FormPage = () => {
    const [tabValue, setTabValue] = useState('tab-one')

    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <Container fluid='lg'>
                <div className='mt-5 mb-5'>
                    <Row>
                        <Col xs={12} sm={6} md={6}><h1>Form Page</h1></Col>
                        <Col xs={12} sm={6} md={6} className='text-md-end text-sm-start mt-3 mt-md-0'>
                            <CommonButton btnLabel='Create Product' btnSize='md' btnType='button' btnVariant='primary' onClick={() => setShowModal(true)} />
                        </Col>
                    </Row>
                </div>

                <TabDetails setTabValue={setTabValue} tabValue={tabValue} />
            </Container>
        </div>
    )
}

export default FormPage