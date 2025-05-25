import React, { useEffect, useState } from "react"
import ReactStars from "react-rating-stars-component"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, FreeMode } from "swiper/modules"
import { FaStar } from "react-icons/fa"
import { apiConnector } from "../../services/apiConnector"
import { ratingsEndpoints } from "../../services/apis"
import "swiper/css"
import "swiper/css/free-mode"
import "../../App.css"

function ReviewSlider() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const truncateWords = 15

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await apiConnector(
          "GET",
          ratingsEndpoints.REVIEWS_DETAILS_API
        )
        if (data?.success) {
          setReviews(data?.data)
        }
      } catch (error) {
        console.error("Error fetching reviews:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
  }, [])

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }

  return (
    <div className="bg-richblack-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          What Our <span className="text-blue-200">Students</span> Say
        </h2>

        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-purple-500 border-t-transparent"></div>
          </div>
        ) : (
          <Swiper
            breakpoints={breakpoints}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[FreeMode, Autoplay]}
            className="review-slider"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="mx-2 flex h-full flex-col justify-between rounded-xl bg-richblack-800 p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <div>
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          review?.user?.image ||
                          `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}&background=random`
                        }
                        alt={`${review?.user?.firstName} ${review?.user?.lastName}`}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {`${review?.user?.firstName} ${review?.user?.lastName}`}
                        </h3>
                        <p className="text-sm text-richblack-300">
                          {review?.course?.courseName}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-richblack-100">
                      {review?.review.split(" ").length > truncateWords
                        ? `${review?.review
                            .split(" ")
                            .slice(0, truncateWords)
                            .join(" ")}...`
                        : review?.review}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-semibold text-yellow-100">
                        {review.rating.toFixed(1)}
                      </span>
                      <ReactStars
                        count={5}
                        value={review.rating}
                        size={20}
                        edit={false}
                        activeColor="#FFD700"
                        emptyIcon={<FaStar className="text-richblack-400" />}
                        fullIcon={<FaStar />}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  )
}

export default ReviewSlider