export const getStaticProps = () => ({
  props: { notFound: true },
})

const page = ({ random }) => `custom 404 page ${random}`
export default page
