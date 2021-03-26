import * as yup from "yup";
import { validateCPF } from "../functions";

const signupSchema = yup.object().shape({
  name: yup.string().required("Campo Obrigatório"),
  email: yup.string().email("E-mail Inválido").required("Campo Obrigatório"),
  cpf: yup
    .string()
    .test("cpf", "CPF Inválido", validateCPF)
    .required("Campo Obrigatório"),
  birthday: yup.date().required("Campo Obrigatório"),
});

export { signupSchema };
