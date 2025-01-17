
function FAQ() {
  const faqs = [
    { id: 1, question: 'Do you have parking facilities?', answer: 'Yes, we offer free on-site parking for all guests.' },
    { id: 2, question: 'What are the check-in and check-out times?', answer: 'Check-in starts at 2:00 PM, and check-out is by 11:00 AM. Early check-ins and late check-outs may be arranged upon request, subject to availability.' },
    { id: 3, question: 'Is the lodge pet-friendly?', answer: 'Yes, we welcome well-behaved pets for an additional cleaning fee of US $250 per stay. Please notify us in advance if you are bringing a pet.' },
    { id: 4, question: 'Is there Wi-Fi available?', answer: 'Yes, complimentary high-speed Wi-Fi is available throughout the property.' },
    { id: 5, question: 'What is your cancellation policy?', answer: 'Cancellations made 48 hours prior to arrival are fully refundable. Cancellations within 48 hours or no-shows will incur a charge for the first nights stay.' },
    { id: 6, question: 'Do you require a deposit?', answer: 'Yes, a 50% deposit is required to confirm your booking. The balance is due upon arrival.' },
    { id: 7, question: 'What payment methods do you accept?', answer: 'We accept cash, credit/debit cards (Visa, MasterCard, AmEx), and mobile payment options like Apple Pay and Google Pay.' },
  ]

  return (
    <>
      <div id="faq" className="py-5" />
      <div className="grid grid-cols-1 lg:grid-cols-3 px-6 lg:px-8 py-0 lg:gap-8 lg:pr-0 lg:text-left text-left text-black">
        <div className="">
          <h2 className="text-4xl decorative">Frequently Asked Questions</h2>
        </div>

        <div className='col-span-2 sm:pt-10 md:pt-10 lg:pt-0'>
          <div
              className="relative w-full pb-8">
              <div className="mx-auto">
                  <div className="grid divide-y divide-neutral-200 lg:pr-8">
                    {faqs.map((faq, idx) => {
                      return (
                        <div className={idx > 0 ? "min-[0px]:py-4 md:py-5" : "min-[0px]:pb-4 md:pb-5"} key={faq.id + "_faq"}>
                          <details className="group">
                              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                  <span> {faq.question}</span>
                                  <span className="transition group-open:rotate-180">
                                          <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                              stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                                              <path d="M6 9l6 6 6-6"></path>
                                          </svg>
                                      </span>
                              </summary>
                              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                                {faq.answer}
                              </p>
                          </details>
                        </div>         
                      )
                    })}
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ
