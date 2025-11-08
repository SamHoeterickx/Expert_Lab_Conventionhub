import type { FC } from "react"
import { Link } from "react-router-dom";

//Components
import { Header, ConventionCard, PreFooter, ScrollWrapper } from "../../../shared/components";

//Routes
import { CONTRIBUTE_ROUTE } from "../../contribute";

//Style
import './explore.css';

//Dummy data
export const dummyConventions = [
    {
      id: 'js-001',
      slug: 'javascript',
      title: 'Javascript',
      description: 'Use camelCase for variable and function names.',
    },
    {
      id: 'react-002',
      slug: 'react',
      title: 'React',
      description: 'Component names must be in PascalCase (e.g., MyComponent).',
    },
    {
      id: 'css-003',
      slug: 'css',
      title: 'CSS',
      description: 'Prefer BEM (Block-Element-Modifier) for scalable class names.',
    },
    {
      id: 'ts-004',
      slug: 'typescript',
      title: 'TypeScript',
      description: 'Use interfaces to define the shape of objects and props.',
    },
    {
      id: 'html-005',
      slug: 'html',
      title: 'HTML',
      description: 'Use semantic elements like <main>, <nav>, and <article> for accessibility.',
    },
    {
      id: 'git-006',
      slug: 'git',
      title: 'Git',
      description: "Write clear commit messages starting with a type (e.g., 'feat:', 'fix:').",
    },
];

export const Explore: FC = () => {
    return(
        <ScrollWrapper>
            <Header 
                title={ "EXPLORE" }
            />
            <section className="explore-section">
                <div className="explore-corner-upper"></div>
                <div className="explore-convention-wrapper">
                    {
                        dummyConventions.map(convention => (
                            <ConventionCard
                                key={ convention.id }
                                convention_title={ convention.title }
                                convention_description={ convention.description }
                                convention_imgPath="./"
                                convention_link={ convention.slug }
                            />
                        ))
                    }
                </div>
            </section>
            <PreFooter>
                <h2>SHARE YOUR STANDARDS</h2>
                <Link 
                    className="large-button"
                    to={ `/${CONTRIBUTE_ROUTE.path}` }
                >
                    Contribute
                </Link>
            </PreFooter>
        </ScrollWrapper>
    )
}