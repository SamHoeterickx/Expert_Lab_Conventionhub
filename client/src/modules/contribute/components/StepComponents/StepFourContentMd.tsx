import type { FC } from "react"
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

//Type
import type { StepsProps } from "../../../../shared/types/Steps.type";


export const StepFourContentMd:FC<StepsProps> = ({ formData, handleChange }) => {
    return (
        <div className="form-input-wrapper">
            <h2>CONVENTION</h2>
            <div className="convention-editor-wrapper">
                <div className="md-editor md-container">
                    <label>MARKDOWN</label>
                    <textarea 
                        name="contentMd" 
                        id="contentMd"
                        value={ formData.contentMd }
                        onChange={ handleChange }
                        placeholder="Write your convention here..."
                        rows={15}
                    />
                </div>
                <div className="md-preview md-container">
                    <label>PREVIEW</label>
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
                    >{ formData.contentMd }</Markdown>
                </div>
            </div>
        </div>
    )
}