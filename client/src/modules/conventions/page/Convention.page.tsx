import { useEffect, type FC } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


//Components
import { Header, LoadingScreen, PreFooter } from "../../../shared/components";
import { InteractionSection } from "../components/InteractionSection";

//Hooks
import { useDocumentTitle, useGetSingleConvention } from "../../../shared/hooks";

//Style
import './convention.css';


export const Convention: FC = () => {

    const { slug } = useParams();

    const { data, isLoading, isError, error } = useGetSingleConvention(slug);

    const pageTitle = data?.data?.title ? `StandardsHUB | ${data.data.title}` : "StandardsHUB | Loading...";

    useDocumentTitle(pageTitle);

    const handleDownload = (content:string) => {
        const file = new Blob([content], { type: 'text/markdown'});
        const url = URL.createObjectURL(file);
        
        const element = document.createElement('a');
        element.href = url;
        element.download = 'STANDARDS.MD'; 
        
        document.body.appendChild(element);
        element.click();
        
        document.body.removeChild(element);
        URL.revokeObjectURL(url);
    }

    if(isError){
        //navigate to and show error
        console.log(error);
    }

    if(isLoading) return <LoadingScreen />

    return (
        <>
            {
                data && data.data && (
                    <>
                        {
                            data && data.data && <Header title={data.data.title.toUpperCase()} />
                        }
                        <div className="convention-info-wrapper">
                            <div className="convention-right-corner-container">
                                <div className="convention-right-corner"></div>
                            </div>
                            <div className="convention-markdown-wrapper">
                                <Markdown
                                    components={{
                                        code({ node, className, children, ...props }) {
                                        const match = /language-(\w+)/.exec(className || '');
                                        return match ? (
                                            <SyntaxHighlighter
                                                style={oneDark}
                                                language={match[1]}
                                                PreTag="div"
                                                {...props}
                                            >
                                                {String(children)}
                                            </SyntaxHighlighter>
                                        ) : (
                                            <code className={className} {...props}>
                                                {children}
                                            </code>
                                        );
                                        }
                                    }}
                                    >
                                    {data?.data?.contentMd}
                                </Markdown>
                                <InteractionSection  
                                    conventionId={ data.data.id }
                                    likeCount={data.data.likes?.length}
                                    authorName={data.data.author?.username}
                                />
                            </div>
                        </div>

                        <PreFooter>
                            <h2 dangerouslySetInnerHTML={{ __html: "DOWNLOAD <br> AND USE" }}></h2>
                            <div
                                className="large-button"
                                onClick={() => {
                                    const rawContent = data?.data?.contentMd;
                                    if(rawContent){
                                        handleDownload(rawContent);
                                    }
                                }}
                            >
                                DOWNLOAD .MD
                            </div>
                        </PreFooter>
                    </>
                )
            }
        </>
    )
}