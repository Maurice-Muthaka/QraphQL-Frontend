import { FC, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import CoinsTable from "../components/PeopleTable";
import { MarketLoad } from "../components/MarketLoad";
import { GETPEOPLE, GETPERSON } from "../GraphQL/Queries";
import { Person } from "../types";
import { HeroSection } from "../components/HeroSection";
import Search from "../components/Search";
import { useParams } from "react-router-dom";
import { PersonLoad } from "../components/PersonLoad";

const SinglePerson: FC = () => {
    const [person, setPerson] = useState<Person>();
    const [personId, setPersonId] = useState('1');
    const { id } = useParams();
    // const personId = id
    console.log('personId', personId)
    
    const { loading, error, data } = useQuery(GETPERSON, { variables: { id: personId }});

    useEffect(() => {
        if (data) setPerson(data?.person)
        if (id) setPersonId(id.toString())
    }, [data])

    return (
        <div className="py-16">
            {loading ? (
                <PersonLoad />
            ) : (
                <div>

        <div className="flex flex-col mt-6">
            <div className="text-center text-gray-800 dark:text-gray-100 font-bold text-2xl md:text-6xl mb-10">
                {person?.name}
            </div>

            <div className="flex flex-col items-stretch mt-5">
                <div className="flex flex-row group px-4 py-8
                    border-t border-gray-200 dark:border-gray-700 border-gray-200 dark:border-gray-700 hover:cursor-pointer
                    transition-all duration-200 delay-100">

                    <div className="rounded-lg bg-green-100 text-primary px-3 py-2 md:py-4">
                        <i className="text-2xl fas fa-mars mx-2"></i>
                    </div>

                    <div className="grow flex flex-col pl-5 pt-2">
                        <div className="font-bold text-sm md:text-lg lg:text-xl">
                            Gender
                        </div>

                        <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                            {person?.gender}
                        </div>
                    </div>

                    <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                </div>

                <div className="flex flex-row group px-4 py-8
                    border-t border-gray-200 dark:border-gray-700 hover:cursor-pointer
                    transition-all duration-200 delay-100">

                    <div className="rounded-lg bg-green-100 text-primary px-3 py-2 md:py-4">
                        <i className="text-2xl fas fa-ruler mx-2"></i>
                    </div>

                    <div className="grow flex flex-col pl-5 pt-2">
                        <div className="font-bold text-sm md:text-lg lg:text-xl">
                            Height
                        </div>

                        <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                            {person?.height}
                        </div>
                    </div>

                    <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                </div>

                <div className="flex flex-row group px-4 py-8
                    border-t border-gray-200 dark:border-gray-700 hover:cursor-pointer
                    transition-all duration-200 delay-100">

                    <div className="rounded-lg bg-green-100 text-primary px-3 py-2 md:py-4">
                        <i className="text-2xl fas fa-weight-scale mx-2"></i>
                    </div>

                    <div className="grow flex flex-col pl-5 pt-2">
                        <div className="font-bold text-sm md:text-lg lg:text-xl">
                            Mass
                        </div>

                        <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                            {person?.mass}
                        </div>
                    </div>

                    <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                </div>

                <div className="flex flex-row group px-4 py-8
                    border-t border-gray-200 dark:border-gray-700 hover:cursor-pointer
                    transition-all duration-200 delay-100">

                    <div className="rounded-lg bg-green-100 text-primary px-3 py-2 md:py-4">
                        <i className="text-2xl fas fa-home mx-2"></i>
                    </div>

                    <div className="grow flex flex-col pl-5 pt-2">
                        <div className="font-bold text-sm md:text-lg lg:text-xl">
                            Home World
                        </div>

                        <div className="font-semibold text-sm md:text-md lg:text-lg
                            text-gray-400 group-hover:text-gray-500
                            transition-all duration-200 delay-100">
                            {person?.homeworld}
                        </div>
                    </div>

                    <i className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"></i>
                </div>
            </div>
        </div>
                </div>
            )}
        </div>
    )
}

export default SinglePerson;