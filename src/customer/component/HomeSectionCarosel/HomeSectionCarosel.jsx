import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button } from "@mui/material";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";



const HomeSectionCarousal = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);  // Ref for manual slide control

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 }, 
    };

    const items = data.slice(0, 20).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
   
    ));

    const maxIndex = items.length - responsive[1024].items;

    const slidePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex((prev) => {
                const newIndex = prev - 1;
                carouselRef.current.slideTo(newIndex);
                return newIndex;
            });
        }
    };

    const slideNext = () => {
        if (activeIndex < maxIndex) {
            setActiveIndex((prev) => {
                const newIndex = prev + 1;
                carouselRef.current.slideTo(newIndex);
                return newIndex;
            });
        }
    };

    return (
        <div className="">
            <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <div className="border border-neutral-200 relative p-5">
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    activeIndex={activeIndex}
                    onSlideChanged={(e) => setActiveIndex(e.item)}
                />

                {/* Next Button */}
                {activeIndex < maxIndex && (
                    <Button
                        onClick={slideNext}
                        variant="contained"
                        className="z-50 bg-white"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            right: "-1rem",
                            transform: "translateY(-50%) rotate(90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="next"
                    >
                        <ChevronLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                    </Button>
                )}

                {/* Prev Button */}
                {activeIndex > 0 && (
                    <Button
                        onClick={slidePrev}
                        variant="contained"
                        className="z-50 bg-white"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "-1rem",
                            transform: "translateY(-50%) rotate(90deg)",
                            bgcolor: "white",
                        }}
                        aria-label="prev"
                    >
                        <ChevronLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarousal;