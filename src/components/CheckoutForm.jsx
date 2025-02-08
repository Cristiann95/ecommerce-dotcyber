import { FormGroup, FloatingLabel, Form, Button } from 'react-bootstrap'


function CheckoutForm({ validated, handleSubmit }) {
    return (
        <Form validated={validated} className='form .was-validated d-flex flex-column align-items-center' onSubmit={handleSubmit} >
            <FormGroup className='w-50 pt-4' controlId="validationCustom01">
                <FloatingLabel controlId="name" label="Nombre" className="mb-3">
                    <Form.Control type="text" placeholder="Nombre" required />
                </FloatingLabel>
                <FloatingLabel controlId="email" label="Email" className="mb-3">
                    <Form.Control type="email" placeholder="nombre@ejemplo.com" required />
                </FloatingLabel>
                <FloatingLabel controlId="phone" label="Telefono" className="mb-3">
                    <Form.Control type="text" placeholder="Teléfono" required />
                </FloatingLabel>
                <FloatingLabel controlId="address" label="Dirección" className="mb-3">
                    <Form.Control type="text" placeholder="Dirección" required />
                </FloatingLabel>
            </FormGroup>
            <Button className='w-50 my-3' type='submit'>Pagar</Button>
        </Form>
    )
}

export default CheckoutForm