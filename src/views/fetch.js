const fetchDataProfesionales = async () => {
    try {
        const peticion = await fetch(url)
        const res = await peticion.json()
        console.log(res)
        setStateProfesionales(res)
    } catch (error) {console.log(error)}
}