import MainRow from "../compontents/MainRow";

const Contact = () => {
	return (
		<MainRow scrollProgressArray={[0, 0.25]} positionOffset={[1, 0]} transformOffset={[0, -100]}>
			<p className="main-text">
				Contact Me
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a odio in dui porta eleifend sit amet sit amet ante. Praesent sagittis ipsum erat, varius gravida risus pellentesque sit amet. Ut quis nisl vitae tellus iaculis pretium. Nullam pretium sem vel erat vestibulum euismod. Sed luctus, nibh sed maximus aliquet, lacus diam venenatis sem, ac tincidunt urna tortor in arcu. Maecenas ullamcorper, odio a cursus maximus, turpis erat vehicula nibh, vel vestibulum ante velit at metus. Praesent lorem leo, scelerisque vitae felis nec, tincidunt auctor orci. Sed gravida ligula eu tortor consectetur luctus vel vitae nisi. Praesent viverra justo in mi varius, vitae mollis sem condimentum. Proin vulputate nunc vitae risus luctus consequat. Maecenas nec nunc turpis. Praesent ornare tellus massa, vel venenatis diam posuere rutrum. Nullam est lorem, consequat eu egestas sodales, aliquam sed elit.
			</p>
		</MainRow>
	)
}

export default Contact;
