export const findCustomer = (e, setHook, customers) => {
    let value = e.target.value;
    const regex = new RegExp(value, 'gi');
    const filtered = customers.filter(({ lastName, firstName }) => {
        const fullName = `${firstName} ${lastName}`
        const reverseFullName = `${lastName} ${firstName}`
        return (
            lastName.match(regex) || firstName.match(regex) || fullName.match(regex) || reverseFullName.match(regex)
        )
    })

    setHook(filtered)
}