import React from "react"

function Principal (props) {
    return (
        <main>
  <div class="container py-4">
       <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">{props.welcome}</h1>
        <p class="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nibh ultricies, maximus risus eu, rhoncus odio. In lacinia aliquam scelerisque. Fusce sit amet mauris congue, consectetur lectus at, molestie nisl.</p>
        <button class="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
  </div>
</main>
    )
}
export default Principal