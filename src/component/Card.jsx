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
            id: 3, 
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
            id: 3, 
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
            id: 3, 
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
            id: 3, 
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
            id: 3, 
          date: 'May 8, 2020',
          heading: 'Exceptional Reliability and Timeliness',
          para: "I've been using this courier service for my business deliveries, and I'm extremely impressed with the level of service they provide. From the moment I started working with them, I noticed a remarkable difference in the reliability and timeliness of my shipments. It's rare to find a courier service that consistently delivers on time, but they have truly mastered this aspect." 
        }
      ]


  return (
    <div className="carousel w-full relative mt-8">
        <ul className="flex items-center overflow-x-auto justify-start w-full gap-8 px-4 scrollbar-hide scroll-smooth" ref={content}>
            {obj.map(item => <li key={item.key} className="w-[800px] h-auto rounded-xl hover:scale-110 cursor-pointer duration-500 ease-in-out shadow-xl">
                <div>
                    <img src={item.img}></img>
                </div>

                <div className="p-8">
                    <p className="text-xs text-gray-500 font-roboto">{item.date}</p>
                    <h1 className="font-semibold text-lg text-black">{item.heading}</h1>
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