const getHikes = async () => {
    return await fetch('https://wander-hikes-api.herokuapp.com/api/v1/hikes/')
}
export { getHikes }