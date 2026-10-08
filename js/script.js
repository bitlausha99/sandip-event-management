const events = [

    {
        name: "Sandipotsav",
        image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=900&q=80",
        date: "Cultural Event",
        venue: "Sandip University Campus",
        description:
            "Celebrate music, dance, creativity, talent and cultural activities."
    },

    {
        name: "INSIGHT Tech Fest",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
        date: "Technical Event",
        venue: "Sandip University",
        description:
            "Explore coding, technology, workshops and exciting technical activities."
    },

    {
        name: "Sports Fest",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
        date: "Sports Event",
        venue: "University Sports Ground",
        description:
            "Participate in exciting sports competitions and university activities."
    },

    {
        name: "Sandip Mega Job Fair",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
        date: "Career Event",
        venue: "Sandip University",
        description:
            "Meet companies and explore career, internship and recruitment opportunities."
    }

];


const container =
    document.getElementById("eventContainer");


events.forEach(function(event) {

    const card = document.createElement("div");

    card.className = "event-card";

    card.innerHTML = `

        <img
            src="${event.image}"
            class="event-image"
            alt="${event.name}"
        >

        <div class="event-content">

            <h3>
                ${event.name}
            </h3>

            <p>
                📅 ${event.date}
            </p>

            <p>
                📍 ${event.venue}
            </p>

            <p>
                ${event.description}
            </p>

            <a
                href="register.html"
                class="register-button"
            >
                Register Now →
            </a>

        </div>

    `;

    container.appendChild(card);

});
