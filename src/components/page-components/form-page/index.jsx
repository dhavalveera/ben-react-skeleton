import { useState } from 'react'

// React Bootstrap
import Container from 'react-bootstrap/Container'

// Tab Component
import TabDetails from './tab-details'

const FormPage = () => {
    const [tabValue, setTabValue] = useState('tab-one')

    return (
        <div>
            <Container fluid='lg'>
                <h1>Form Page</h1>

                <TabDetails setTabValue={setTabValue} tabValue={tabValue} />
            </Container>
        </div>
    )
}

export default FormPage