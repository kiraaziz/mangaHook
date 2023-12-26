"use server"

const useManga = async (id) => {

    const url = `${process.env.API_URL}/api/manga/${id}`

    const reqData = await fetch(url, {
        next: { revalidate: 60 * 60 * 2 },
    })
    const data = await reqData.json()

    return data
}

export default useManga