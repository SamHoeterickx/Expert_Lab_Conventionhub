import { useEffect, useState, type FC } from "react"

//Hooks
import { useAuth, useGetLikeStatus, useLikeConvention } from "../../../shared/hooks";

//Type
interface InteractionSectionProps {
    conventionId: string,
    likeCount?: number,
    authorName?: string
};

export const InteractionSection:FC<InteractionSectionProps> = ({ conventionId, likeCount, authorName }) => {

    const [likeState, setLikeState] = useState<boolean>(false);
    const [currentLikeCount, setCurrentLikeCount] = useState<number>(likeCount || 0);
    const [showError, setShowError] = useState(false);


    const { mutate, isPending, isError, error:postError } = useLikeConvention();
    const { data } = useGetLikeStatus(conventionId);
    const { user } = useAuth();

    useEffect(() => {
        console.log(data);
        setLikeState(!!data?.data?.likeStatus);
    }, [data]);

    useEffect(() => {
        if (isError) {
            setShowError(true);
            const timer = setTimeout(() => setShowError(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [isError]);


    const handleLikeButton = () => {
        const conventionLikeData = {
            conventionId: conventionId,
            likeState: likeState
        };

        if(likeState && user){
            setCurrentLikeCount(currentLikeCount - 1);
        }else if(!likeState && user ){
            setCurrentLikeCount(currentLikeCount + 1)
        }
        
        mutate(conventionLikeData, {
            onSuccess: () => {
                setLikeState(!likeState)
            },
            onError: (error) => {
                console.error("Register failed:", error.message);
            }
        });
    }

    return (
        <section className="interaction-section">
            <div className="error-pop-up-wrapper">
                { 
                    showError && (
                        <>
                            <p className="error-pop-up-content">{ postError?.message }</p>
                            <div className="error-pop-up-triangle"></div>
                        </>
                    )
                }
                
            </div>
            <div className="like-wrapper">
                <h3>{ currentLikeCount }</h3>
                <button
                    onClick={handleLikeButton}
                    className={`like-button ${likeState ? 'liked' : ''}`}
                    disabled={ isPending }
                >
                    ↑
                </button>
            </div>
            <p>Created by:</p>
            <p>{ authorName }</p>
        </section>
    );
}