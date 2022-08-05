import { FC, useEffect, useRef, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { MarketLoad } from "../components/MarketLoad";
import { GETPEOPLE } from "../GraphQL/Queries";
import { People, Person } from "../types";
import { HeroSection } from "../components/HeroSection";
import Search from "../components/Search";
import PeopleTable from "../components/PeopleTable";

const HomeTab: FC = () => {
    const [people, setPeople] = useState<People>();
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const myRef = useRef<any>(null)
    
    const { loading, error, data } = useQuery(GETPEOPLE, { variables: { search: search, page: page }});

    useEffect(() => {
        if (data) {
            setPeople(data?.people)
            console.log(data)
        }
    }, [data])

    const executeScroll = () => myRef?.current.scrollIntoView()  

    return (
        <div className="py-16">
            <HeroSection executeScroll={executeScroll} />
            <div className="mt-[80vh]">
                <Search search={search} setSearch={setSearch} />
            </div>
            
            {loading ? (
                <MarketLoad />
            ) : (
                <div ref={myRef}>
                    <PeopleTable people={people?.people} />

                    <div className="flex justify-center items-center my-6">
                        <button onClick={() => page > 1 && setPage(page - 1)} className={`${page === 1 ? 'bg-green-300' : 'bg-primary'} text-white rounded py-2 px-4 mr-4`}>
                        <i className="fas fa-arrow-left mr-2"></i> Previous
                        </button>
                        <button onClick={() => people?.next && setPage(page + 1)} className={`${people?.next ? 'bg-primary' : 'bg-green-300'} text-white rounded py-2 px-4`}>
                          Next <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HomeTab;