import { Calendar, ViewType } from "@airjam/react-calendar"
import { BookingResource } from "@airjam/types";
import { Carousel } from "react-responsive-carousel";

interface RoomDetail {
    id: string;
    highlight: JSX.Element;
    description: string;
    photos: string[];
}[]

// This map uses IDs that AirJam creates for each resources to add additional information.
// Generally, information like this can be retrieved from a database
const rooms: Map<string, RoomDetail> = new Map([
  ['EibQnSRv', { id: 'EibQnSRv',
    description: "This example showcases a free resource booking system. No payment information is required to book. The system is configured to require the host's moderation, meaning booking requests will not be immediately confirmed and will need the host's approval or denial.",
    highlight: <div className="text-sm mb-4 gap-2">
        <div><i className="fa fa-bed" /> Sleeps 3</div>
        <div><i className="fa fa-smoking-ban" /> No Smoking</div>
        <div><i className="fa fa-wifi" /> Free Wifi</div>
        <div><i className="fa fa-restroom" /> 2 bathroom</div>
      </div>,
    photos: ['/rooms/b12.jpg', '/rooms/b12.jpg', '/rooms/b14.jpg'] }],
  ['11QZMAqJ', { id: '11QZMAqJ',
    description: "This resource is an example of a paid resource integrated with Stripe's payment processing form. This example is wired with Stripe's test account, so feel to test the booking flow with Stripe's test credit card numbers, such as 4242 4242 4242 4242.",
    highlight: <div className="text-sm mb-4 gap-2">
        <div><i className="fa fa-bed" /> Sleeps 6</div>
        <div><i className="fa fa-smoking-ban" /> No Smoking</div>
        <div><i className="fa fa-wifi" /> Free Wifi</div>
        <div><i className="fa fa-restroom" /> 4 bathroom</div>
      </div>,
    photos: ['/rooms/b22.jpg', '/rooms/b23.jpg', '/rooms/b23.jpg'] }]
]);

function Book() {
  return (
    <>
      <div id="reservations" className="py-5"/>
      <div className="grid grid-cols-1 lg:grid-cols-3 p-6 lg:px-8 pb-10 lg:gap-8 lg:pr-0 lg:text-left text-left text-black">
        <div className="">
          <h2 className="text-4xl decorative">Reservations</h2>
          <p className='py-10'>
            Use the interface on right to book your stay
          </p>
        </div>

        <div className='col-span-2'>
          <div
              className="relative w-full pb-8">
              <div className="mx-auto">
                <Calendar id={import.meta.env.VITE_AIRJAM_APPOINTMENT_ID}
                  viewAs={ViewType.CalendarBookSelectResource} 
                  renderResourceForSingularBookingFunc={renderSpecificRoom} paymentProcessorPublicKey={import.meta.env.VITE_STRIPE_PUBLISHABLE_CLIENT_KEY}
                  />
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

const renderSpecificRoom = (resource: BookingResource, bookButton: JSX.Element, isAvailable: boolean) => {
  console.log(resource);
  if (!isAvailable) return <div className="sm:my-5 lg:mx-6">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between">
          <span className="text-gray-500">{resource.name}</span>
          <span className="transition group-open:rotate-180 text-gray-500">
            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-neutral-400 text-center text-sm">
          This suite is unavailable for booking between the selected dates.
        </p>
      </details>
    </div>;

  const roomDetail = rooms.get(resource._id)
  return <div className="sm:my-5 lg:mx-6">
      <details className="group" open>
        <summary className="flex cursor-pointer list-none items-center justify-between">
          <span className="font-semibold text-emerald-950">{resource.name}</span>
          <span className="transition group-open:rotate-180 text-gray-500">
            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
            {roomDetail?.photos && roomDetail.photos.length > 0 ?
              <Carousel autoPlay={false} showStatus={false} showThumbs={false} >
                {roomDetail.photos.map(d => {
                  return <div className={`w-full h-auto`}>
                    <img src={d} />
                </div>
                })}
              </Carousel> :
            ""}
            <div className="room-detail">
              <div className="text-sm">
                {roomDetail?.description}
              </div>
              <div className="font-semibold text-emerald-950 py-2 text-md">{resource.staticPrice && resource.staticPrice > 0 ? `$${resource.staticPrice} / night` : "FREE"}</div>
              {roomDetail ? roomDetail.highlight : ""}
              <div>{bookButton}</div>
            </div>
          </div>
        </p>
      </details>
    </div>;
}

export default Book
