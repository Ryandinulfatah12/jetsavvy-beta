
function advanceSearch() {
  $('#resultSearch').html(`
    <div class="row px-4">
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
  `);
}
// Load Choice JS File
function loadJS(file) {
  var script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", file);
  document.getElementsByTagName("body")[0].appendChild(script);
}

// Query view GRID
function queryView() {
  loadJS("./assets/js/choices.min.js");
  $('#queryView').html('');
  $('#queryView').append(`
      <div class="row py-3">
          <h6 class="text-uppercase label"><img src="assets/img/plane.svg" width="20px"> Aircrafts selected</h6>
          <div class="col-md-8">
              <div class="form-group">
                <select class="choices form-select multiple-remove" multiple="multiple">
                    <optgroup label="Figures">
                        <option value="romboid">Romboid</option>
                        <option value="trapeze" selected>Trapeze</option>
                        <option value="triangle">Triangle</option>
                        <option value="polygon">Polygon</option>
                    </optgroup>
                    <optgroup label="Colors">
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue" selected>Blue</option>
                        <option value="purple">Purple</option>
                    </optgroup>
                </select>
            </div>
          </div>

          <div class="col-md-2 clearfix"></div>
    
          <div class="col-md-2">
            <a href="quote-details-1.html" class="btn btn-warning btn-md text-uppercase createQuote">create quote</a>
          </div>
        </div>
        
        <!-- RESULTS SECTION -->
        <div class="row py-3">

          <div class="col-md-3 p-2">
            <h6 class="text-uppercase label">23 result</h6>
          </div>

          <div class="col-md-3 p-2 clearfix"></div>

          <div class="col-md-1 p-2 text-nowrap">
            <select class="form-select no-border" id="basicSelect">
                <option>TYPE</option>
                <option>Blade Runner</option>
                <option>Thor Ragnarok</option>
            </select>
          </div>

          <div class="col-md-1 p-2 text-nowrap">
            <select class="form-select no-border" id="basicSelect">
                <option>RATINGS</option>
                <option>Blade Runner</option>
                <option>Thor Ragnarok</option>
            </select>
          </div>

          <div class="col-md-1 p-2 text-nowrap">
            <select class="form-select no-border" id="basicSelect">
                <option>PRICING</option>
                <option>Blade Runner</option>
                <option>Thor Ragnarok</option>
            </select>
          </div>

          <div class="col-md-1 p-2">
            <select class="form-select no-border" id="basicSelect">
                <option>AMENITIES</option>
                <option>Blade Runner</option>
                <option>Thor Ragnarok</option>
            </select>
          </div>

          <div class="col-md-2 p-2 justify-content-evenly text-center">
            <a href="#" onclick="listViewQuery()"><img src="assets/img/icon/list-white.svg" alt=""></a>
            <a href="#" onclick="queryView()"><img class="text-dark"><img src="assets/img/icon/grid-dark.svg" alt=""></a>
          </div>
          
        </div>

        <div class="row">
          <h6 class="text-uppercase label"><img src="assets/img/down.svg" alt=""> empty legs 3</h6>
        </div>

        <div class="row px-2 py-2">
          <div class="col-lg-4">
            
            <div class="card">
              <div class="card-content">
                  <div id="carousel-example-card" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                          <li data-target="#carousel-example-card" data-slide-to="0" class="active"></li>
                          <li data-target="#carousel-example-card" data-slide-to="1" class=""></li>
                          <li data-target="#carousel-example-card" data-slide-to="2" class=""></li>
                      </ol>
                      <div class="carousel-inner rounded-0" role="listbox">
                          <div class="carousel-item active">
                              <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="First slide">
                          </div>
                          <div class="carousel-item">
                              <img src="assets/img/plane/plane2_409x230.png" class="d-block w-100" alt="Second slide">
                          </div>
                          <div class="carousel-item">
                              <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="Third slide">
                          </div>
                      </div>
                      <a class="carousel-control-prev" href="#carousel-example-card" role="button" data-slide="prev">
                          <span class="bx bx-chevron-left icon-prev" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carousel-example-card" role="button" data-slide="next">
                          <span class="bx bx-chevron-right icon-next" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                      </a>
                  </div>
                  <div class="card-body">
                      <span class="text-warning text-uppercase">Light jet Charter | 8 seats available</span>
                      <div class="row text-secondary text-uppercase justify-content-between">
                        <div class="col"><h4 class="card-title text-nowrap">Cessna Citation Sovereign</h4></div>
                        <div class="col clearfix"></div>
                        <div class="col"><h4 class="card-title">$40.000</h4></div>
                      </div>
                      <p class="text-light">
                          Flight Time 4:04 hrs
                      </p>
                      <p class="text-light">
                          Tail Number: 01WRLMS65 
                      </p>
                      <div class="row text-secondary justify-content-between">
                        <div class="col"><p class="text-light">Operator : <span class="text-warning">Michael Scott</span></p></div>
                        <div class="col clearfix"></div>
                        <div class="col"><button class="btn btn-outline-warning btn-sm">Select</button></div>
                      </div>
                  </div>
              </div>
          </div>

          </div>

          <div class="col-lg-4">
            
            <div class="card">
              <div class="card-content">
                  <div id="carousel-example-card" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                          <li data-target="#carousel-example-card" data-slide-to="0" class="active"></li>
                          <li data-target="#carousel-example-card" data-slide-to="1" class=""></li>
                          <li data-target="#carousel-example-card" data-slide-to="2" class=""></li>
                      </ol>
                      <div class="carousel-inner rounded-0" role="listbox">
                          <div class="carousel-item active">
                              <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="First slide">
                          </div>
                          <div class="carousel-item">
                              <img src="assets/img/plane/plane2_409x230.png" class="d-block w-100" alt="Second slide">
                          </div>
                          <div class="carousel-item">
                              <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="Third slide">
                          </div>
                      </div>
                      <a class="carousel-control-prev" href="#carousel-example-card" role="button" data-slide="prev">
                          <span class="bx bx-chevron-left icon-prev" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carousel-example-card" role="button" data-slide="next">
                          <span class="bx bx-chevron-right icon-next" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                      </a>
                  </div>
                  <div class="card-body">
                      <span class="text-warning text-uppercase">Light jet Charter | 8 seats available</span>
                      <div class="row text-secondary text-uppercase justify-content-between">
                        <div class="col"><h4 class="card-title text-nowrap">Cessna Citation Sovereign</h4></div>
                        <div class="col clearfix"></div>
                        <div class="col"><h4 class="card-title">$40.000</h4></div>
                      </div>
                      <p class="text-light">
                          Flight Time 4:04 hrs
                      </p>
                      <p class="text-light">
                          Tail Number: 01WRLMS65 
                      </p>
                      <div class="row text-secondary justify-content-between">
                        <div class="col"><p class="text-light">Operator : <span class="text-warning">Michael Scott</span></p></div>
                        <div class="col clearfix"></div>
                        <div class="col"><button class="btn btn-outline-warning btn-sm">Select</button></div>
                      </div>
                  </div>
              </div>
          </div>

          </div>

          <div class="col-lg-4">
            
            <div class="card">
              <div class="card-content">
                  <div id="carousel-example-card" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                          <li data-target="#carousel-example-card" data-slide-to="0" class="active"></li>
                          <li data-target="#carousel-example-card" data-slide-to="1" class=""></li>
                          <li data-target="#carousel-example-card" data-slide-to="2" class=""></li>
                      </ol>
                      <div class="carousel-inner rounded-0" role="listbox">
                          <div class="carousel-item active">
                              <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="First slide">
                          </div>
                          <div class="carousel-item">
                              <img src="assets/img/plane/plane2_409x230.png" class="d-block w-100" alt="Second slide">
                          </div>
                          <div class="carousel-item">
                              <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="Third slide">
                          </div>
                      </div>
                      <a class="carousel-control-prev" href="#carousel-example-card" role="button" data-slide="prev">
                          <span class="bx bx-chevron-left icon-prev" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carousel-example-card" role="button" data-slide="next">
                          <span class="bx bx-chevron-right icon-next" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                      </a>
                  </div>
                  <div class="card-body">
                      <span class="text-warning text-uppercase">Light jet Charter | 8 seats available</span>
                      <div class="row text-secondary text-uppercase justify-content-between">
                        <div class="col"><h4 class="card-title text-nowrap">Cessna Citation Sovereign</h4></div>
                        <div class="col clearfix"></div>
                        <div class="col"><h4 class="card-title">$40.000</h4></div>
                      </div>
                      <p class="text-light">
                          Flight Time 4:04 hrs
                      </p>
                      <p class="text-light">
                          Tail Number: 01WRLMS65 
                      </p>
                      <div class="row text-secondary justify-content-between">
                        <div class="col"><p class="text-light">Operator : <span class="text-warning">Michael Scott</span></p></div>
                        <div class="col clearfix"></div>
                        <div class="col"><button class="btn btn-outline-warning btn-sm">Select</button></div>
                      </div>
                  </div>
              </div>
          </div>

          </div>

          <div class="col-lg-4">
            
            <div class="card">
              <div class="card-content">
                  <div id="carousel-example-card" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                          <li data-target="#carousel-example-card" data-slide-to="0" class="active"></li>
                          <li data-target="#carousel-example-card" data-slide-to="1" class=""></li>
                          <li data-target="#carousel-example-card" data-slide-to="2" class=""></li>
                      </ol>
                      <div class="carousel-inner rounded-0" role="listbox">
                          <div class="carousel-item active">
                              <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="First slide">
                          </div>
                          <div class="carousel-item">
                              <img src="assets/img/plane/plane2_409x230.png" class="d-block w-100" alt="Second slide">
                          </div>
                          <div class="carousel-item">
                              <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="Third slide">
                          </div>
                      </div>
                      <a class="carousel-control-prev" href="#carousel-example-card" role="button" data-slide="prev">
                          <span class="bx bx-chevron-left icon-prev" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carousel-example-card" role="button" data-slide="next">
                          <span class="bx bx-chevron-right icon-next" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                      </a>
                  </div>
                  <div class="card-body">
                      <span class="text-warning text-uppercase">Light jet Charter | 8 seats available</span>
                      <div class="row text-secondary text-uppercase justify-content-between">
                        <div class="col"><h4 class="card-title text-nowrap">Cessna Citation Sovereign</h4></div>
                        <div class="col clearfix"></div>
                        <div class="col"><h4 class="card-title">$40.000</h4></div>
                      </div>
                      <p class="text-light">
                          Flight Time 4:04 hrs
                      </p>
                      <p class="text-light">
                          Tail Number: 01WRLMS65 
                      </p>
                      <div class="row text-secondary justify-content-between">
                        <div class="col"><p class="text-light">Operator : <span class="text-warning">Michael Scott</span></p></div>
                        <div class="col clearfix"></div>
                        <div class="col"><button class="btn btn-outline-warning btn-sm">Select</button></div>
                      </div>
                  </div>
              </div>
          </div>

          </div>

          <div class="col-lg-4">
            
            <div class="card">
              <div class="card-content">
                  <div id="carousel-example-card" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                          <li data-target="#carousel-example-card" data-slide-to="0" class="active"></li>
                          <li data-target="#carousel-example-card" data-slide-to="1" class=""></li>
                          <li data-target="#carousel-example-card" data-slide-to="2" class=""></li>
                      </ol>
                      <div class="carousel-inner rounded-0" role="listbox">
                          <div class="carousel-item active">
                              <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="First slide">
                          </div>
                          <div class="carousel-item">
                              <img src="assets/img/plane/plane2_409x230.png" class="d-block w-100" alt="Second slide">
                          </div>
                          <div class="carousel-item">
                              <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="Third slide">
                          </div>
                      </div>
                      <a class="carousel-control-prev" href="#carousel-example-card" role="button" data-slide="prev">
                          <span class="bx bx-chevron-left icon-prev" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carousel-example-card" role="button" data-slide="next">
                          <span class="bx bx-chevron-right icon-next" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                      </a>
                  </div>
                  <div class="card-body">
                      <span class="text-warning text-uppercase">Light jet Charter | 8 seats available</span>
                      <div class="row text-secondary text-uppercase justify-content-between">
                        <div class="col"><h4 class="card-title text-nowrap">Cessna Citation Sovereign</h4></div>
                        <div class="col clearfix"></div>
                        <div class="col"><h4 class="card-title">$40.000</h4></div>
                      </div>
                      <p class="text-light">
                          Flight Time 4:04 hrs
                      </p>
                      <p class="text-light">
                          Tail Number: 01WRLMS65 
                      </p>
                      <div class="row text-secondary justify-content-between">
                        <div class="col"><p class="text-light">Operator : <span class="text-warning">Michael Scott</span></p></div>
                        <div class="col clearfix"></div>
                        <div class="col"><button class="btn btn-outline-warning btn-sm">Select</button></div>
                      </div>
                  </div>
              </div>
          </div>

          </div>

          <div class="col-lg-4">
            
            <div class="card">
              <div class="card-content">
                  <div id="carousel-example-card" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                          <li data-target="#carousel-example-card" data-slide-to="0" class="active"></li>
                          <li data-target="#carousel-example-card" data-slide-to="1" class=""></li>
                          <li data-target="#carousel-example-card" data-slide-to="2" class=""></li>
                      </ol>
                      <div class="carousel-inner rounded-0" role="listbox">
                          <div class="carousel-item active">
                              <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="First slide">
                          </div>
                          <div class="carousel-item">
                              <img src="assets/img/plane/plane2_409x230.png" class="d-block w-100" alt="Second slide">
                          </div>
                          <div class="carousel-item">
                              <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="Third slide">
                          </div>
                      </div>
                      <a class="carousel-control-prev" href="#carousel-example-card" role="button" data-slide="prev">
                          <span class="bx bx-chevron-left icon-prev" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carousel-example-card" role="button" data-slide="next">
                          <span class="bx bx-chevron-right icon-next" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                      </a>
                  </div>
                  <div class="card-body">
                      <span class="text-warning text-uppercase">Light jet Charter | 8 seats available</span>
                      <div class="row text-secondary text-uppercase justify-content-between">
                        <div class="col"><h4 class="card-title text-nowrap">Cessna Citation Sovereign</h4></div>
                        <div class="col clearfix"></div>
                        <div class="col"><h4 class="card-title">$40.000</h4></div>
                      </div>
                      <p class="text-light">
                          Flight Time 4:04 hrs
                      </p>
                      <p class="text-light">
                          Tail Number: 01WRLMS65 
                      </p>
                      <div class="row text-secondary justify-content-between">
                        <div class="col"><p class="text-light">Operator : <span class="text-warning">Michael Scott</span></p></div>
                        <div class="col clearfix"></div>
                        <div class="col"><button class="btn btn-outline-warning btn-sm">Select</button></div>
                      </div>
                  </div>
              </div>
          </div>

          </div>
        </div>
  `)

}


// LIST STYLE VIEW
function listViewQuery() {
    loadJS("./assets/js/choices.min.js");
    $('#queryView').html('');
    $('#queryView').html(`
        <div class="row py-3">
            <h6 class="text-uppercase label"><img src="assets/img/plane.svg" width="20px"> Aircrafts selected</h6>
            <div class="col-md-8">
              <div class="form-group">
                <select class="choices form-select multiple-remove" multiple="multiple">
                  <optgroup label="Figures">
                    <option value="romboid">Romboid</option>
                    <option value="trapeze" selected>Trapeze</option>
                    <option value="triangle">Triangle</option>
                    <option value="polygon">Polygon</option>
                  </optgroup>
                  <optgroup label="Colors">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue" selected>Blue</option>
                    <option value="purple">Purple</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div class="col-md-2 clearfix"></div>

            <div class="col-md-2">
              <a href="quote-details-1.html" class="btn btn-warning btn-md text-uppercase createQuote">create quote</a>
            </div>
          </div>

          <!-- RESULTS SECTION -->
          <div class="row py-3">

            <div class="col-md-5">
              <div class="col-4"><h6 class="text-uppercase label">23 result</h6></div>
              <div class="col-8">
                <select class="form-select no-border" id="basicSelect">
                  <option selected="" disabled="">SORT BY</option>
                  <option>Blade Runner</option>
                  <option>Thor Ragnarok</option>
                </select>
              </div>

            </div>

            <div class="col-md-1 clearfix"></div>

            <div class="col-md-1 text-nowrap">
              <select class="form-select no-border" id="basicSelect">
                <option>TYPE</option>
                <option>Blade Runner</option>
                <option>Thor Ragnarok</option>
              </select>
            </div>

            <div class="col-md-1 text-nowrap">
              <select class="form-select no-border" id="basicSelect">
                <option>RATINGS</option>
                <option>Blade Runner</option>
                <option>Thor Ragnarok</option>
              </select>
            </div>

            <div class="col-md-1 text-nowrap">
              <select class="form-select no-border" id="basicSelect">
                <option>PRICING</option>
                <option>Blade Runner</option>
                <option>Thor Ragnarok</option>
              </select>
            </div>

            <div class="col-md-1">
              <select class="form-select no-border" id="basicSelect">
                <option>AMENITIES</option>
                <option>Blade Runner</option>
                <option>Thor Ragnarok</option>
              </select>
            </div>

            <div class="col-md-2 p-2 justify-content-evenly text-center">
              <a href="#" onclick="listViewQuery()"><img src="assets/img/icon/list-white.svg" alt=""></a>
              <a href="#" onclick="queryView()"><img class="text-dark"><img src="assets/img/icon/grid-dark.svg" alt=""></a>
            </div>

          </div>

          <div class="row">
            <h6 class="text-uppercase label"><img src="assets/img/down.svg" alt=""> empty legs 3</h6>
          </div>

          <!-- LIST CARD -->
          <div class="row px-2 py-2">

            <div class="card p-4">
              <div class="row">
                <div class="col-lg-6">
                  <div class="card-content">
                    <button class="btn btn-outline-warning btn-sm justify-content-evenly mb-1">Select</button>
                    <span class="text-warning text-uppercase">Light jet Charter | 8 seats available</span>
                    <div class="row text-secondary text-uppercase justify-content-between">
                      <div class="col"><h4 class="card-title text-nowrap">Beech baron 58</h4></div>
                      <div class="col clearfix"></div>
                      <div class="col"><h4 class="card-title">$40.000</h4></div>
                    </div>
                    <p class="text-light">
                      Flight Time 4:04 hrs
                    </p>
                    <p class="text-light">
                      Tail Number: 01WRLMS65 
                    </p>
                    <p class="text-light">Operator : <span class="text-warning">Michael Scott</span></p>
                    <p class="text-light">
                      Capacity: 10 Passengers
                    </p>
                    <p class="text-light">
                      1 flight attendent • 2 bathrooms • Recliner-style seats
                      Couch • Wi-Fi • 10 LCD screens
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div id="carousel-example-card" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carousel-example-card" data-slide-to="0" class="active"></li>
                      <li data-target="#carousel-example-card" data-slide-to="1" class=""></li>
                      <li data-target="#carousel-example-card" data-slide-to="2" class=""></li>
                    </ol>
                    <div class="carousel-inner rounded-0" role="listbox">
                      <div class="carousel-item active">
                        <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="First slide">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/img/plane/plane2_409x230.png" class="d-block w-100" alt="Second slide">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="Third slide">
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-example-card" role="button" data-slide="prev">
                      <span class="bx bx-chevron-left icon-prev" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-card" role="button" data-slide="next">
                      <span class="bx bx-chevron-right icon-next" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- LIST CARD -->
          <div class="row px-2 py-2">

            <div class="card p-4">
              <div class="row">
                <div class="col-lg-6">
                  <div class="card-content">
                    <button class="btn btn-outline-warning btn-sm justify-content-evenly mb-1">Select</button>
                    <span class="text-warning text-uppercase">Light jet Charter | 8 seats available</span>
                    <div class="row text-secondary text-uppercase justify-content-between">
                      <div class="col"><h4 class="card-title text-nowrap">Beech baron 58</h4></div>
                      <div class="col clearfix"></div>
                      <div class="col"><h4 class="card-title">$40.000</h4></div>
                    </div>
                    <p class="text-light">
                      Flight Time 4:04 hrs
                    </p>
                    <p class="text-light">
                      Tail Number: 01WRLMS65 
                    </p>
                    <p class="text-light">Operator : <span class="text-warning">Michael Scott</span></p>
                    <p class="text-light">
                      Capacity: 10 Passengers
                    </p>
                    <p class="text-light">
                      1 flight attendent • 2 bathrooms • Recliner-style seats
                      Couch • Wi-Fi • 10 LCD screens
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div id="carousel-example-card" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carousel-example-card" data-slide-to="0" class="active"></li>
                      <li data-target="#carousel-example-card" data-slide-to="1" class=""></li>
                      <li data-target="#carousel-example-card" data-slide-to="2" class=""></li>
                    </ol>
                    <div class="carousel-inner rounded-0" role="listbox">
                      <div class="carousel-item active">
                        <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="First slide">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/img/plane/plane2_409x230.png" class="d-block w-100" alt="Second slide">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="Third slide">
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-example-card" role="button" data-slide="prev">
                      <span class="bx bx-chevron-left icon-prev" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-card" role="button" data-slide="next">
                      <span class="bx bx-chevron-right icon-next" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- LIST CARD -->
          <div class="row px-2 py-2">

            <div class="card p-4">
              <div class="row">
                <div class="col-lg-6">
                  <div class="card-content">
                    <button class="btn btn-outline-warning btn-sm justify-content-evenly mb-1">Select</button>
                    <span class="text-warning text-uppercase">Light jet Charter | 8 seats available</span>
                    <div class="row text-secondary text-uppercase justify-content-between">
                      <div class="col"><h4 class="card-title text-nowrap">Beech baron 58</h4></div>
                      <div class="col clearfix"></div>
                      <div class="col"><h4 class="card-title">$40.000</h4></div>
                    </div>
                    <p class="text-light">
                      Flight Time 4:04 hrs
                    </p>
                    <p class="text-light">
                      Tail Number: 01WRLMS65 
                    </p>
                    <p class="text-light">Operator : <span class="text-warning">Michael Scott</span></p>
                    <p class="text-light">
                      Capacity: 10 Passengers
                    </p>
                    <p class="text-light">
                      1 flight attendent • 2 bathrooms • Recliner-style seats
                      Couch • Wi-Fi • 10 LCD screens
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div id="carousel-example-card" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carousel-example-card" data-slide-to="0" class="active"></li>
                      <li data-target="#carousel-example-card" data-slide-to="1" class=""></li>
                      <li data-target="#carousel-example-card" data-slide-to="2" class=""></li>
                    </ol>
                    <div class="carousel-inner rounded-0" role="listbox">
                      <div class="carousel-item active">
                        <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="First slide">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/img/plane/plane2_409x230.png" class="d-block w-100" alt="Second slide">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="Third slide">
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-example-card" role="button" data-slide="prev">
                      <span class="bx bx-chevron-left icon-prev" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-card" role="button" data-slide="next">
                      <span class="bx bx-chevron-right icon-next" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- LIST CARD -->
          <div class="row px-2 py-2">

            <div class="card p-4">
              <div class="row">
                <div class="col-lg-6">
                  <div class="card-content">
                    <button class="btn btn-outline-warning btn-sm justify-content-evenly mb-1">Select</button>
                    <span class="text-warning text-uppercase">Light jet Charter | 8 seats available</span>
                    <div class="row text-secondary text-uppercase justify-content-between">
                      <div class="col"><h4 class="card-title text-nowrap">Beech baron 58</h4></div>
                      <div class="col clearfix"></div>
                      <div class="col"><h4 class="card-title">$40.000</h4></div>
                    </div>
                    <p class="text-light">
                      Flight Time 4:04 hrs
                    </p>
                    <p class="text-light">
                      Tail Number: 01WRLMS65 
                    </p>
                    <p class="text-light">Operator : <span class="text-warning">Michael Scott</span></p>
                    <p class="text-light">
                      Capacity: 10 Passengers
                    </p>
                    <p class="text-light">
                      1 flight attendent • 2 bathrooms • Recliner-style seats
                      Couch • Wi-Fi • 10 LCD screens
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div id="carousel-example-card" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carousel-example-card" data-slide-to="0" class="active"></li>
                      <li data-target="#carousel-example-card" data-slide-to="1" class=""></li>
                      <li data-target="#carousel-example-card" data-slide-to="2" class=""></li>
                    </ol>
                    <div class="carousel-inner rounded-0" role="listbox">
                      <div class="carousel-item active">
                        <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="First slide">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/img/plane/plane2_409x230.png" class="d-block w-100" alt="Second slide">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="Third slide">
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-example-card" role="button" data-slide="prev">
                      <span class="bx bx-chevron-left icon-prev" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-card" role="button" data-slide="next">
                      <span class="bx bx-chevron-right icon-next" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- LIST CARD -->
          <div class="row px-2 py-2">

            <div class="card p-4">
              <div class="row">
                <div class="col-lg-6">
                  <div class="card-content">
                    <button class="btn btn-outline-warning btn-sm justify-content-evenly mb-1">Select</button>
                    <span class="text-warning text-uppercase">Light jet Charter | 8 seats available</span>
                    <div class="row text-secondary text-uppercase justify-content-between">
                      <div class="col"><h4 class="card-title text-nowrap">Beech baron 58</h4></div>
                      <div class="col clearfix"></div>
                      <div class="col"><h4 class="card-title">$40.000</h4></div>
                    </div>
                    <p class="text-light">
                      Flight Time 4:04 hrs
                    </p>
                    <p class="text-light">
                      Tail Number: 01WRLMS65 
                    </p>
                    <p class="text-light">Operator : <span class="text-warning">Michael Scott</span></p>
                    <p class="text-light">
                      Capacity: 10 Passengers
                    </p>
                    <p class="text-light">
                      1 flight attendent • 2 bathrooms • Recliner-style seats
                      Couch • Wi-Fi • 10 LCD screens
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div id="carousel-example-card" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carousel-example-card" data-slide-to="0" class="active"></li>
                      <li data-target="#carousel-example-card" data-slide-to="1" class=""></li>
                      <li data-target="#carousel-example-card" data-slide-to="2" class=""></li>
                    </ol>
                    <div class="carousel-inner rounded-0" role="listbox">
                      <div class="carousel-item active">
                        <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="First slide">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/img/plane/plane2_409x230.png" class="d-block w-100" alt="Second slide">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="Third slide">
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-example-card" role="button" data-slide="prev">
                      <span class="bx bx-chevron-left icon-prev" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-card" role="button" data-slide="next">
                      <span class="bx bx-chevron-right icon-next" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- LIST CARD -->
          <div class="row px-2 py-2">

            <div class="card p-4">
              <div class="row">
                <div class="col-lg-6">
                  <div class="card-content">
                    <button class="btn btn-outline-warning btn-sm justify-content-evenly mb-1">Select</button>
                    <span class="text-warning text-uppercase">Light jet Charter | 8 seats available</span>
                    <div class="row text-secondary text-uppercase justify-content-between">
                      <div class="col"><h4 class="card-title text-nowrap">Beech baron 58</h4></div>
                      <div class="col clearfix"></div>
                      <div class="col"><h4 class="card-title">$40.000</h4></div>
                    </div>
                    <p class="text-light">
                      Flight Time 4:04 hrs
                    </p>
                    <p class="text-light">
                      Tail Number: 01WRLMS65 
                    </p>
                    <p class="text-light">Operator : <span class="text-warning">Michael Scott</span></p>
                    <p class="text-light">
                      Capacity: 10 Passengers
                    </p>
                    <p class="text-light">
                      1 flight attendent • 2 bathrooms • Recliner-style seats
                      Couch • Wi-Fi • 10 LCD screens
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div id="carousel-example-card" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carousel-example-card" data-slide-to="0" class="active"></li>
                      <li data-target="#carousel-example-card" data-slide-to="1" class=""></li>
                      <li data-target="#carousel-example-card" data-slide-to="2" class=""></li>
                    </ol>
                    <div class="carousel-inner rounded-0" role="listbox">
                      <div class="carousel-item active">
                        <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="First slide">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/img/plane/plane2_409x230.png" class="d-block w-100" alt="Second slide">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/img/plane/plane409x230.png" class="d-block w-100" alt="Third slide">
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carousel-example-card" role="button" data-slide="prev">
                      <span class="bx bx-chevron-left icon-prev" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carousel-example-card" role="button" data-slide="next">
                      <span class="bx bx-chevron-right icon-next" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `);
}