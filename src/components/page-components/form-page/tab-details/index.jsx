import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

// Form Components
import FormOne from '../form-one'

const TabDetails = ({tabValue, setTabValue}) => {
    return (
        <Tabs id='controlled-tab-example' activeKey={tabValue} onSelect={(k) => setTabValue(k)} className='mb-3'>
            <Tab eventKey='tab-one' title='Tab One'>
                <FormOne setTabValue={setTabValue} />
            </Tab>
            <Tab eventKey='tab-two' title='Tab Two'>
                <p>Tab Two</p>
            </Tab>
            <Tab eventKey='tab-three' title='Tab Three'>
                <p>Tab Three</p>
            </Tab>
            <Tab eventKey='tab-four' title='Tab FOur'>
                <p>Tab Four</p>
            </Tab>
        </Tabs>
    )
}

export default TabDetails