export interface Usuariodto{
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  edad: number;
  sexo: string;
  email: string;
  colegio: string;
  password: string;
  celular: string;
  grado_escolar: string;
  test1: boolean;
  test2: boolean;
  test3: boolean;
  test4: boolean;
  test5: boolean;
  test6: boolean;
  test7: boolean;
  test8: boolean;
  test9: boolean;
  token: Token;

  groups: number[];
}
interface Token{
  refresh: string;
  access: string;
}
