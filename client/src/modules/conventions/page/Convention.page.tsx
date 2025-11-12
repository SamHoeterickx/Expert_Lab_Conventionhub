import { type FC } from "react";
import { Link, useParams } from "react-router-dom";
// import Markdown from "markdown-to-jsx";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


//Components
import { Header, PreFooter } from "../../../shared/components";

//Hooks
import { useGetSingleConvention } from "../../../shared/hooks";

//Style
import './convention.css';


export const Convention: FC = () => {

    const { slug } = useParams();

    const { data, isLoading, isError, error } = useGetSingleConvention(slug);


    const processedMd = data?.data?.contentMd
        ? data.data.contentMd
            // .replace(/\\n/g, "\\n")   // Vervang de TEKST '\\n' door een ECHTE newline
            // .replace(/\\`/g, "`")    // Vervang de TEKST '\\`' door een ECHTE backtick
            // .replace(/\\'/g, "'")    // Vervang de TEKST '\\'' door een ECHTE single quote
            // .replace(/\\\${/g, '${') // Vervang de TEKST '\\${' door een ECHTE template literal
        : ""
    ;

    console.log(processedMd);

    return (
        <>
            {
                processedMd && (
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

                            </div>
                        </div>

                        <PreFooter>
                            <h2 dangerouslySetInnerHTML={{ __html: "DOWNLOAD <br> AND USE" }}></h2>
                            <Link
                                className="large-button"
                                to={`/${"download"}`}
                            >
                                DOWNLOAD .MD
                            </Link>
                        </PreFooter>
                    </>
                )
            }
        </>
    )
}