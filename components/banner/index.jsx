const Banner = ({children,image}) => {
  return (
    <section className="pt-12 pb-10 bg-cover bg-no-repeat" style={{ backgroundImage:image }}>
     {children}
  </section>
  )
}

export default Banner