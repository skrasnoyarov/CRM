export type Props = {
    canAuth: boolean,
    header: string,
    onSubmit: (data: loginType) => any,
    valueButton: string
}

export type State = {
    email: string,
    password: string,
    validMail: boolean,
    validPassword: boolean
}

export type loginType = {
    email: string,
    password: string
}