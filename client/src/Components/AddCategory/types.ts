export type Props = {
    categories: any,
    changeCategoryById: any,
    createNewCategory: any
}

export type State = {
    name: string,
    isNew: boolean,
    valid: boolean,
    id: string,
    image: image
}

type image = {
    file: any,
    src: any
}