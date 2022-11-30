import React from "react";
import {useGetChartsQuery} from "../api/musicApi";
import {TbPlayerPlay} from "react-icons/tb";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper";
import "swiper/css";

function TopPlaces() {
  const {data, isFetching} = useGetChartsQuery();

  console.log(data);

  return (
    <div className="h-fit pl-4 sticky top-[56px]">
      <div>
        <div className="mt-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Top Charts</h2>
          <p className="text-gray-300 text-sm">See more</p>
        </div>

        <ol className="mt-8 grid gap-8  list-decimal marker:text-sm  marker:text-gray-300">
          {data?.slice(0, 5).map((chart) => (
            <li key={chart.key} className="flex items-center justify-between">
              <div className="flex gap-4 items-center ">
                <img src={chart?.images?.coverart} alt="" className="w-20 rounded-xl" />
                <div>
                  <p className="text-sm">{chart.title}</p>
                  <span className="text-gray-300 text-xs">{chart.subtitle}</span>
                </div>
              </div>
              <div className="border-[1px] p-1 rounded-full">
                <TbPlayerPlay />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <div className="mt-8 flex items-center justify-between">
          <h2 className="text-xl font-bold">Top Artist</h2>
          <p className="text-gray-300 text-sm">See more</p>
        </div>
        <div className="mt-4">
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            centeredSlides
            centeredSlidesBounds
            freeMode
            modules={[FreeMode]}
          >
            {data?.slice(0, 10).map((song, i) => (
              <SwiperSlide
                style={{width: "80px", height: "auto", position: "relative"}}
                key={song?.artists[0].adamid}
              >
                <img
                  src={song.images.background}
                  alt=""
                  className="w-full rounded-full hover:opacity-50"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TopPlaces;
