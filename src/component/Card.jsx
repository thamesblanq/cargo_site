import { useRef } from "react";
import reviewOne from '../cargo-images/review-one.png';
import reviewTwo from '../cargo-images/review-two.png';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Card = () => {
        const content = useRef(null);


        const scrollLeft = () => {
        content.current.scrollLeft -= 300;
        }
        
    
    
        const scrollRight = () => {
            content.current.scrollLeft += 300
        }

      const obj = [
        { img: reviewOne,
            id: 1, 
          date: 'May 8, 2020',
          heading: 'Exceptional Reliability and Timeliness',
          para: "I've been using this courier service for my business deliveries, and I'm extremely impressed with the level of service they provide. From the moment I started working with them, I noticed a remarkable difference in the reliability and timeliness of my shipments. It's rare to find a courier service that consistently delivers on time, but they have truly mastered this aspect." 
        },
        { img: reviewOne,
            id: 2, 
          date: 'May 8, 2020',
          heading: 'Exceptional Reliability and Timeliness',
          para: "I've been using this courier service for my business deliveries, and I'm extremely impressed with the level of service they provide. From the moment I started working with them, I noticed a remarkable difference in the reliability and timeliness of my shipments. It's rare to find a courier service that consistently delivers on time, but they have truly mastered this aspect." 
        },
        { img: reviewTwo,
            id: 3, 
          date: 'May 8, 2020',
          heading: 'Exceptional Reliability and Timeliness',
          para: "I've been using this courier service for my business deliveries, and I'm extremely impressed with the level of service they provide. From the moment I started working with them, I noticed a remarkable difference in the reliability and timeliness of my shipments. It's rare to find a courier service that consistently delivers on time, but they have truly mastered this aspect." 
        },
        { img: reviewTwo,
            id: 4, 
          date: 'May 8, 2020',
          heading: 'Exceptional Reliability and Timeliness',
          para: "I've been using this courier service for my business deliveries, and I'm extremely impressed with the level of service they provide. From the moment I started working with them, I noticed a remarkable difference in the reliability and timeliness of my shipments. It's rare to find a courier service that consistently delivers on time, but they have truly mastered this aspect." 
        },
        { img: reviewTwo,
            id: 5, 
          date: 'May 8, 2020',
          heading: 'Exceptional Reliability and Timeliness',
          para: "I've been using this courier service for my business deliveries, and I'm extremely impressed with the level of service they provide. From the moment I started working with them, I noticed a remarkable difference in the reliability and timeliness of my shipments. It's rare to find a courier service that consistently delivers on time, but they have truly mastered this aspect." 
        },
        { img: reviewTwo,
            id: 6, 
          date: 'May 8, 2020',
          heading: 'Exceptional Reliability and Timeliness',
          para: "I've been using this courier service for my business deliveries, and I'm extremely impressed with the level of service they provide. From the moment I started working with them, I noticed a remarkable difference in the reliability and timeliness of my shipments. It's rare to find a courier service that consistently delivers on time, but they have truly mastered this aspect." 
        },
        { img: reviewTwo,
            id: 7, 
          date: 'May 8, 2020',
          heading: 'Exceptional Reliability and Timeliness',
          para: "I've been using this courier service for my business deliveries, and I'm extremely impressed with the level of service they provide. From the moment I started working with them, I noticed a remarkable difference in the reliability and timeliness of my shipments. It's rare to find a courier service that consistently delivers on time, but they have truly mastered this aspect." 
        },
        { img: reviewTwo,
            id: 8, 
          date: 'May 8, 2020',
          heading: 'Exceptional Reliability and Timeliness',
          para: "I've been using this courier service for my business deliveries, and I'm extremely impressed with the level of service they provide. From the moment I started working with them, I noticed a remarkable difference in the reliability and timeliness of my shipments. It's rare to find a courier service that consistently delivers on time, but they have truly mastered this aspect." 
        },
        { img: reviewTwo,
            id: 9, 
          date: 'May 8, 2020',
          heading: 'Exceptional Reliability and Timeliness',
          para: "I've been using this courier service for my business deliveries, and I'm extremely impressed with the level of service they provide. From the moment I started working with them, I noticed a remarkable difference in the reliability and timeliness of my shipments. It's rare to find a courier service that consistently delivers on time, but they have truly mastered this aspect." 
        },
        { img: reviewTwo,
            id: 10, 
          date: 'May 8, 2020',
          heading: 'Exceptional Reliability and Timeliness',
          para: "I've been using this courier service for my business deliveries, and I'm extremely impressed with the level of service they provide. From the moment I started working with them, I noticed a remarkable difference in the reliability and timeliness of my shipments. It's rare to find a courier service that consistently delivers on time, but they have truly mastered this aspect." 
        },
        { img: reviewTwo,
            id: 11, 
          date: 'May 8, 2020',
          heading: 'Exceptional Reliability and Timeliness',
          para: "I've been using this courier service for my business deliveries, and I'm extremely impressed with the level of service they provide. From the moment I started working with them, I noticed a remarkable difference in the reliability and timeliness of my shipments. It's rare to find a courier service that consistently delivers on time, but they have truly mastered this aspect." 
        },
        { img: reviewTwo,
            id: 12, 
          date: 'May 8, 2020',
          heading: 'Exceptional Reliability and Timeliness',
          para: "I've been using this courier service for my business deliveries, and I'm extremely impressed with the level of service they provide. From the moment I started working with them, I noticed a remarkable difference in the reliability and timeliness of my shipments. It's rare to find a courier service that consistently delivers on time, but they have truly mastered this aspect." 
        }
      ]


  return (
    <div className="carousel w-full mt-8 h-[70%]">
        <ul className="grid  grid-cols-3 md:grid-cols-3 md:grid-rows-1 overflow-x-auto h-[90%] justify-start w-full gap-x-72 gap-y-8 md:gap-y-8 md:gap-x-[35rem] px-8 md:px-16 scrollbar-hide scroll-smooth" ref={content}>
            {obj.map(item => <li key={item.id} className="grid md:grid-cols-2 w-[60vw] md:w-[38vw] h-auto rounded-xl hover:skew-y-3 cursor-pointer duration-500 ease-in-out shadow-2xl">
                <div className="h-full">
                    <img src={item.img} className="block object-cover"></img>
                </div>

                <div className="px-2 py-2">
                    <p className="text-xs text-gray-500 font-roboto">{item.date}</p>
                    <h1 className="font-semibold text-sm text-black">{item.heading}</h1>
                    <p className="font-poppins text-xs text-gray-500">{item.para}</p>
                </div>
            </li>)}
        </ul>


        <button onClick={scrollLeft}><FaArrowCircleLeft className="absolute left-0 top-1/2 text-primary cursor-pointer text-2xl z-10" /></button>

        <button onClick={scrollRight}><FaArrowCircleRight className="absolute right-0 top-1/2 text-primary cursor-pointer text-2xl z-10" /></button>
        
       
    </div>
  )
}

export default Card;