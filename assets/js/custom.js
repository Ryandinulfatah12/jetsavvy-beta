function advanceSearch() {
  $('#resultSearch').append(`
    <div class="row px-5">
          <div class="card">
            <div class="card-content">
                <div class="card-body">
                    <div class="row">

                      <div class="col-md border-right-custom">
                        <div class="form-group">
                          <label for="first-name-vertical">Jet Type</label>
                          <select class="form-select no-border" id="basicSelect">
                              <option selected="" disabled=""></option>
                              <option>Blade Runner</option>
                              <option>Thor Ragnarok</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md border-right-custom">
                        <div class="form-group">
                          <label for="first-name-vertical">make/model</label>
                          <select class="form-select no-border" id="basicSelect">
                              <option selected="" disabled=""></option>
                              <option>Blade Runner</option>
                              <option>Thor Ragnarok</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md border-right-custom">
                        <div class="form-group">
                          <label for="first-name-vertical">amenities</label>
                          <select class="form-select no-border" id="basicSelect">
                              <option selected="" disabled=""></option>
                              <option>Blade Runner</option>
                              <option>Thor Ragnarok</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md border-right-custom">
                        <div class="form-group">
                          <label for="first-name-vertical">pricing</label>
                          <select class="form-select no-border" id="basicSelect">
                              <option selected="" disabled=""></option>
                              <option>Blade Runner</option>
                              <option>Thor Ragnarok</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md border-right-custom">
                        <div class="form-group">
                          <label for="first-name-vertical">passengers</label>
                          <select class="form-select no-border" id="basicSelect">
                              <option selected="" disabled=""></option>
                              <option>Blade Runner</option>
                              <option>Thor Ragnarok</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md border-right-custom">
                        <div class="form-group">
                          <label for="first-name-vertical">operator</label>
                          <select class="form-select no-border" id="basicSelect">
                              <option selected="" disabled=""></option>
                              <option>Blade Runner</option>
                              <option>Thor Ragnarok</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md border-right-custom">
                        <div class="form-group">
                          <label for="first-name-vertical">tail numbers</label>
                          <select class="form-select no-border" id="basicSelect">
                              <option selected="" disabled=""></option>
                              <option>Blade Runner</option>
                              <option>Thor Ragnarok</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-md">
                        <div class="form-group">
                          <label for="first-name-vertical">Search radius</label>
                          <select class="form-select no-border" id="basicSelect">
                              <option selected="" disabled=""></option>
                              <option>Blade Runner</option>
                              <option>Thor Ragnarok</option>
                          </select>
                        </div>
                      </div>

                    </div>

                </div>
            </div>
          </div>

      </div>
      
      <!-- widget -->
      <div class="row">

        <div class="col-md-2">
          <div class="card">
            <div class="card-body d-flex">
              <div class="form-group">
                <label for="first-name-vertical">depart</label>
                <select class="form-select no-border" id="basicSelect">
                    <option selected="" disabled="">12 Aug</option>
                    <option>Blade Runner</option>
                    <option>Thor Ragnarok</option>
                </select>
              </div>
              <div class="form-group">
                <label for="first-name-vertical">depart</label>
                <select class="form-select no-border" id="basicSelect">
                    <option selected="" disabled="">12 jan</option>
                    <option>Blade Runner</option>
                    <option>Thor Ragnarok</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-2">
          <div class="card">
            <div class="card-body d-flex">
              <div class="form-group border-right-1">
                <label for="first-name-vertical">depart</label>
                <select class="form-select no-border" id="basicSelect">
                    <option selected="" disabled="">12.08</option>
                    <option>Blade Runner</option>
                    <option>Thor Ragnarok</option>
                </select>
              </div>
              <div class="form-group">
                <label for="first-name-vertical">return</label>
                <select class="form-select no-border" id="basicSelect">
                    <option selected="" disabled="">12.48</option>
                    <option>Blade Runner</option>
                    <option>Thor Ragnarok</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <label for="" class="label pb-2">search operators</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control form-border" placeholder="Enter operator name" aria-describedby="button-addon2">
                    <button class="btn btn-warning btn-sm" type="button" id="button-addon2">SEARCH</button>
                </div>
              </div>

              <div class="accordion" id="accordionExample">
                  <a href="#" class="text-light" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <b><span>+</span> Flightpath</b>
                  </a>

                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <ul class="list-unstyled">
                      <li><span>-</span> Select all</li>
                      <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                      <li><span>-</span> Premier 2</li>
                    </ul>
                  </div>
              </div>
              <div class="accordion" id="accordionExample">
                  <a href="#" class="text-light" data-toggle="collapse" data-target="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo">
                    <b><span>+</span> Private air</b>
                  </a>

                  <div id="collapsetwo" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <ul class="list-unstyled">
                      <li><span>-</span> Select all</li>
                      <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                      <li><span>-</span> Premier 2</li>
                    </ul>
                  </div>
              </div>
              <div class="accordion" id="accordionExample">
                  <a href="#" class="text-light" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                    <b><span>+</span> Jet Select</b>
                  </a>

                  <div id="collapseThree" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <ul class="list-unstyled">
                      <li><span>-</span> Select all</li>
                      <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                      <li><span>-</span> Premier 2</li>
                    </ul>
                  </div>
              </div>
              <div class="accordion" id="accordionExample">
                  <a href="#" class="text-light" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    <b class="text-warning"><span>+</span> Sky Guest</b>
                  </a>

                  <div id="collapseFour" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <ul class="list-unstyled">
                      <li><span>-</span> Select all</li>
                      <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                      <li><span>-</span> Premier 2</li>
                    </ul>
                  </div>
              </div>
              <div class="accordion" id="accordionExample">
                  <a href="#" class="text-light" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                    <b><span>+</span> Sky trek</b>
                  </a>

                  <div id="collapseFive" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <ul class="list-unstyled">
                      <li><span>-</span> Select all</li>
                      <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                      <li><span>-</span> Premier 2</li>
                    </ul>
                  </div>
              </div>
              <div class="accordion" id="accordionExample">
                  <a href="#" class="text-light" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                    <b><span>+</span> Fly Private</b>
                  </a>

                  <div id="collapseSix" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <ul class="list-unstyled">
                      <li><span>-</span> Select all</li>
                      <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                      <li><span>-</span> Premier 2</li>
                    </ul>
                  </div>
              </div>

              <a href="" class="pt-3 text-uppercase text-warning float-right">clear</a>

            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <label for="" class="label pb-2">search tail number</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control form-border" placeholder="Enter tail number" aria-describedby="button-addon2">
                    <button class="btn btn-warning btn-sm" type="button" id="button-addon2">SEARCH</button>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <div class="card">
                <div class="card-body">
                  <div class="accordion" id="accordionExample">
                      <a href="#" class="text-light" data-toggle="collapse" data-target="#panelTwo-3" aria-expanded="true" aria-controls="panelTwo-3">
                        <b><span>+</span> Beech Craft</b>
                      </a>

                      <div id="panelTwo-3" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <ul class="list-unstyled">
                          <li><span>-</span> Select all</li>
                          <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                          <li><span>-</span> Premier 2</li>
                        </ul>
                      </div>
                  </div>
                  <div class="accordion" id="accordionExample">
                      <a href="#" class="text-light" data-toggle="collapse" data-target="#panelTwo-2" aria-expanded="true" aria-controls="panelTwo-2">
                        <b><span>+</span> Boeing</b>
                      </a>

                      <div id="panelTwo-2" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <ul class="list-unstyled">
                          <li><span>-</span> Select all</li>
                          <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                          <li><span>-</span> Premier 2</li>
                        </ul>
                      </div>
                  </div>
                  <div class="accordion" id="accordionExample">
                      <a href="#" class="text-light" data-toggle="collapse" data-target="#panelTwo-3" aria-expanded="true" aria-controls="panelTwo-3">
                        <b><span>+</span> Bombardien</b>
                      </a>

                      <div id="panelTwo-3" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <ul class="list-unstyled">
                          <li><span>-</span> Select all</li>
                          <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                          <li><span>-</span> Premier 2</li>
                        </ul>
                      </div>
                  </div>
                  <div class="accordion" id="accordionExample">
                      <a href="#" class="text-light" data-toggle="collapse" data-target="#panelTwo-4" aria-expanded="true" aria-controls="panelTwo-4">
                        <b class="text-warning"><span>+</span> Cessna</b>
                      </a>

                      <div id="panelTwo-4" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <ul class="list-unstyled">
                          <li><span>-</span> Select all</li>
                          <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                          <li><span>-</span> Premier 2</li>
                        </ul>
                      </div>
                  </div>
                  <div class="accordion" id="accordionExample">
                      <a href="#" class="text-light" data-toggle="collapse" data-target="#panelTwo-5" aria-expanded="true" aria-controls="panelTwo-5">
                        <b><span>+</span> Dassault</b>
                      </a>

                      <div id="panelTwo-5" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <ul class="list-unstyled">
                          <li><span>-</span> Select all</li>
                          <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                          <li><span>-</span> Premier 2</li>
                        </ul>
                      </div>
                  </div>

                  <a href="" class="pt-3 text-uppercase text-warning float-right">clear</a>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card">
                <div class="card-body">

                  <div class="accordion" id="accordionExample">
                      <a href="#" class="text-light" data-toggle="collapse show" data-target="#panelThree-1" aria-expanded="true" aria-controls="panelThree-1">
                        <b><img src="assets/img/icon/person.svg" alt=""> Flight Adendant</b>
                      </a>

                      <div id="panelThree-1" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <ul class="list-unstyled">
                          <li><span>-</span> Select all</li>
                          <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                          <li><span>-</span> Premier 2</li>
                        </ul>
                      </div>
                  </div>
                  <div class="accordion" id="accordionExample">
                      <a href="#" class="text-light" data-toggle="collapse" data-target="#panelThree-2" aria-expanded="true" aria-controls="panelThree-2">
                        <b class="text-warning"><img src="assets/img/icon/person.svg" alt=""> Bathroom</b>
                      </a>

                      <div id="panelThree-2" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <ul class="list-unstyled">
                          <li><span>-</span> Select all</li>
                          <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                          <li><span>-</span> Premier 2</li>
                        </ul>
                      </div>
                  </div>
                  <div class="accordion" id="accordionExample">
                      <a href="#" class="text-light" data-toggle="collapse" data-target="#panelThree-3" aria-expanded="true" aria-controls="panelThree-3">
                        <b><img src="assets/img/icon/satisfied.svg" alt=""> Reclyner style</b>
                      </a>

                      <div id="panelThree-3" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <ul class="list-unstyled">
                          <li><span>-</span> Select all</li>
                          <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                          <li><span>-</span> Premier 2</li>
                        </ul>
                      </div>
                  </div>
                  <div class="accordion" id="accordionExample">
                      <a href="#" class="text-light" data-toggle="collapse" data-target="#panelThree-4" aria-expanded="true" aria-controls="panelThree-4">
                        <b><img src="assets/img/icon/person.svg" alt=""> Seats</b>
                      </a>

                      <div id="panelThree-4" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <ul class="list-unstyled">
                          <li><span>-</span> Select all</li>
                          <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                          <li><span>-</span> Premier 2</li>
                        </ul>
                      </div>
                  </div>
                  <div class="accordion" id="accordionExample">
                      <a href="#" class="text-light" data-toggle="collapse" data-target="#panelThree-5" aria-expanded="true" aria-controls="panelThree-5">
                        <b class="text-warning"><img src="assets/img/icon/wifi.svg" alt=""> Wifi</b>
                      </a>

                      <div id="panelThree-5" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <ul class="list-unstyled">
                          <li><span>-</span> Select all</li>
                          <li class="font-weight-bold text-warning"><span>-</span> Premier 1A</li>
                          <li><span>-</span> Premier 2</li>
                        </ul>
                      </div>
                  </div>

                  <a href="" class="pt-3 text-uppercase text-warning float-right">clear</a>

                </div>
              </div>
            </div>

            

          </div>
        </div>

        <div class="col-md">
          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <label for="" class="label pb-2">search radius</label>
                <div class="input-group mb-3">
                    <label for="" class="label pb-3"><b><span class="value">0</span> Kilometer</b></label>
                    <input type="range">
                </div>
                <div class="row">
                  <div class="col">
                    <h6 class="label text-uppercase text-inline" style="font-size: 10px;">distance in</h6>
                  </div>
                  <div class="col">
                    <h6 class="label text-uppercase" style="font-size: 10px;">usd | <span class="text-warning">miles</span></h6>
                  </div>
                  <div class="col">
                    <a href="" class="pt-3 text-uppercase text-warning float-right">clear</a>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <h5 for="" class=" pb-2">$17,234 - $67,100</h5>
                <p class="text-light">The average price of a flight from Toronto to New York is $21,246.</p>
                <div class="input-group mb-3">
                    <input type="range">
                </div>
                <div class="row">
                  <div class="col">
                    <h6 class="label text-uppercase text-inline" style="font-size: 10px;">price in</h6>
                  </div>
                  <div class="col">
                    <h6 class="label text-uppercase" style="font-size: 10px;">usd | <span class="text-warning">miles</span></h6>
                  </div>
                  <div class="col">
                    <a href="" class="pt-3 text-uppercase text-warning float-right">clear</a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
  `);
}