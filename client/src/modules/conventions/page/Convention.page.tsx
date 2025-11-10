import { Link, useParams } from "react-router-dom"

import { type FC } from "react";

//Components
import { Header, PreFooter } from "../../../shared/components"

//Hooks
import { useGetSingleConvention } from "../../../shared/hooks";

//Style
import './Convention.css'
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'


export const Convention:FC = () => {
    
    const { id } = useParams();

    const {data, isLoading, isError, error} = useGetSingleConvention(id)

    return( 
        <>
            {
                isLoading && <h2>LOADING...</h2>
            }
            {
                data && data.data &&
                <>
                    <Header title={ data.data.title.toUpperCase()} />
                    <div className="convention-info-wrapper">
                        <div className="convention-right-corner-container">
                            <div className="convention-right-corner"></div>
                        </div>
                        <div className="convention-markdown-wrapper markdown-body">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{data.data.contentMd}</ReactMarkdown>
                        </div>
                    </div>

                    <PreFooter>
                        <h2 dangerouslySetInnerHTML={{__html: "DOWNLOAD <br> AND USE"}}></h2>
                        <Link 
                            className="large-button"
                            to={ `/${"download"}` }
                        >
                            DOWNLOAD .MD
                        </Link>
                    </PreFooter>
                </>
            }
            {
                isError && <p>{ error.message }</p>
            }
        </>
    )
}