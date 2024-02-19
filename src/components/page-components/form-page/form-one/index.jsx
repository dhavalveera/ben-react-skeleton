// Formik + Yup
import { useFormik } from "formik";
import * as Yup from 'yup'

// react-bootstrap
import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

// Common
import CommonButton from "../../../common/button";

const FormOne = ({setTabValue}) => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            contactNo:''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            email: Yup.string().email('Enter Valid Email').required('Email Address is required'),
            contactNo: Yup.string().required('Contact Number is required')
        }),
        onSubmit: async (values, helpers) => {
            try {
                console.log({values});

                setTabValue('tab-two')
            } catch (error) {
                helpers.setSubmitting(false)
            }
        }
    })

    return (
        <div>
            <Container fluid='lg'>
                <form onSubmit={formik.handleSubmit}>
                    <Row>
                        <Col xs={12} sm={6} md={4} lg={4}>
                            <Form.Group style={{marginTop:'15px'}}>
                                <Form.Label htmlFor="firstName">First Name</Form.Label>
                                <Form.Control type="text" id="firstName" name='firstName' value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter First Name" className={formik.touched.firstName && formik.errors.firstName ? "form-error" : ''} isInvalid={formik.touched.firstName && formik.errors.firstName} isValid={formik.values.firstName !== ''} />

                                {formik.touched.firstName && formik.errors.firstName ? <Alert variant="danger" style={{marginTop: '15px'}}>{formik.errors.firstName}</Alert> : null}
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={4}>
                            <Form.Group style={{marginTop:'15px'}}>
                                <Form.Label htmlFor="lastName">Last Name</Form.Label>
                                <Form.Control type="text" id="lastName" name='lastName' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Last Name" className={formik.touched.lastName && formik.errors.lastName ? "form-error" : ''} isInvalid={formik.touched.lastName && formik.errors.lastName} isValid={formik.values.lastName !== ''} />

                                {formik.touched.lastName && formik.errors.lastName ? <Alert variant="danger" style={{marginTop: '15px'}}>{formik.errors.lastName}</Alert> : null}
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={4}>
                            <Form.Group style={{marginTop:'15px'}}>
                                <Form.Label htmlFor="emailAddress">Email Address</Form.Label>
                                <Form.Control type="email" id="emailAddress" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Last Name" className={formik.touched.email && formik.errors.email ? "form-error" : ''} isInvalid={formik.touched.email && formik.errors.email} isValid={formik.values.email !== ''} />

                                {formik.touched.email && formik.errors.email ? <Alert variant="danger" style={{marginTop: '15px'}}>{formik.errors.email}</Alert> : null}
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={4}>
                            <Form.Group style={{marginTop:'15px'}}>
                                <Form.Label htmlFor="contactNo">Contact No</Form.Label>
                                <Form.Control type="tel" id="contactNo" name='contactNo' value={formik.values.contactNo} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Enter Last Name" className={formik.touched.contactNo && formik.errors.contactNo ? "form-error" : ''} isInvalid={formik.touched.contactNo && formik.errors.contactNo} isValid={formik.values.contactNo !== ''} />

                                {formik.touched.contactNo && formik.errors.contactNo ? <Alert variant="danger" style={{marginTop: '15px'}}>{formik.errors.contactNo}</Alert> : null}
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className="d-grid mt-4">
                        <CommonButton btnLabel={formik.isSubmitting ? 'Saving...' : "Save"} btnType={formik.isSubmitting ? 'button' : 'submit'} btnVariant="primary" btnSize="lg" />
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default FormOne