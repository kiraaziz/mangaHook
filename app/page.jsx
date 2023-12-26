import useMangaList from "@/hooks/manga/useMangaList"
import GridList from "@/components/MangaList/GridList"

const MangaList = async () => {

    const mangaData = await useMangaList("")

    return (
        <GridList
            dataList={mangaData.mangaList}
            metaData={mangaData.metaData}
        />
    )
}

export default MangaList

