import PagesGridList from "../../../../components/Manga/PagesGridList"
import useMangaChapter from "@/hooks/manga/useMangaChapter"
//@/components/Manga/pagesGridList
const MangaPage = async ({ params }) => {

    const mangaPages = await useMangaChapter(params.id, params.ch)

    return (
        <PagesGridList ch={params.ch} id={params.id} chapterList={mangaPages} />
    )

}

export default MangaPage