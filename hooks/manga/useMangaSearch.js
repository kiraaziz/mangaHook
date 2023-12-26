"use server"

const useMangaSearch = async (params) => {

    const url = process.env.API_URL + "/api/search/" + params


    const reqData = await fetch(url , {
        next: { revalidate: 60 * 60 * 3 },
    })
    const data = await reqData.json()

    return data
}

export default useMangaSearch