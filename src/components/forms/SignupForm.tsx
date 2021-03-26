import { Field, Form, Formik } from "formik";
import { signupSchema } from "../../services/validations/forms/signupForm";
import { DateInput } from "../input";

function handleSubmit(values) {
  console.log(values);
}

export default function SignupForm() {
  return (
    <div>
      <Formik
        validationSchema={signupSchema}
        initialValues={{}}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              name="name"
              type="text"
              id="name"
              placeholder="Nome"
              className={`${errors.name && touched.name && "is-invalid"}`}
            />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field
              name="email"
              type="text"
              id="email"
              placeholder="E-mail"
              className={`${errors.email && touched.email && "is-invalid"}`}
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              name="cpf"
              type="text"
              id="cpf"
              placeholder="CPF"
              className={`${errors.cpf && touched.cpf && "is-invalid"}`}
            />
            {errors.cpf && touched.cpf ? <div>{errors.cpf}</div> : null}
            <DateInput
              name="birthday"
              error={errors.birthday}
              placeholder="Data de Nascimento"
            />

            <button type="submit">enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
