const createLayoutDashboard = () => `
    <div id='dashboard-container'>
        <section class="sidebar">
        <div class="sidebar-menu">
            <ul>
            <li>
                <div class="active">
                <span class="las la-igloo"></span>
                <span>Dashboard</span>
                </div>
            </li>

            <li class='menu' id='dashboard-user'>
                <div><span class="las la-users"></span><span>Users</span></div>
            </li>

            <li class="dropdown1 menu">
                <div>
                <span class="las la-book"></span>
                Graves
                <span id="sub1" class="las la-caret-down"></span>
                </div>
            </li>
            <ul class="submenu">
<<<<<<< HEAD
                <li id='dashboard-blok-a'><div>Blok A</div></li>
                <li id='dashboard-blok-b'><div>Blok B</div></li>
                <li id='dashboard-blok-c'><div>Blok C</div></li>
                <li id='dashboard-blok-d'><div>Blok D</div></li>
                <li id='dashboard-blok-e'><div>Blok E</d></li>
=======
                <li id='dashboard-blokA' class='blok-submenu'><div>Blok A</div></li>
                <li id='dashboard-blokB' class='blok-submenu'><div>Blok B</div></li>
                <li id='dashboard-blokC' class='blok-submenu'><div>Blok C</div></li>
                <li id='dashboard-blokD' class='blok-submenu'><div>Blok D</div></li>
                <li id='dashboard-blokE' class='blok-submenu'><div>Blok E</d></li>
>>>>>>> 28dd06facdba56d5077cabb666429104ecfbadbf
            </ul>

            <li class='menu' id='dashboard-transaction'>
            <div>
                <span class="las la-shopping-bag">
                </span>
                Transactions
            </div>
            </li>
            </ul>
        </div>
        </section>

        <section id="dashboard-main">
        </section>

    </div>
`

const createSearchFilterDataTemplate = () => {
  $('#dashboard-main').append(
      `
        <div class="search">
        <div class="search-wrapper">
        <span class="las la-search"></span>
        <input type="search" id='search-input' placeholder="Search here">
        </div>
        </div>

        <div class="filter">
            <span>Filter</span><i id="sub2" class="las la-caret-down"></i>
        </div>

        <div id="data-container"><div id="list_table" class="list_table"></div></div>
      `
  )
}

const createDashboardUserTableTemplate = () => `
<<<<<<< HEAD
<h2>List Users</h2>
=======
<h2 class='table-title'>List Users</h2>
>>>>>>> 28dd06facdba56d5077cabb666429104ecfbadbf
<table id="userListTable" class='table-data'>
    <tr>
        <th>User ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Address</th>
        <th>Action</th>
    </tr>
</table>
`

const createDashboardTransactionTableTemplate = () => `
<<<<<<< HEAD
<h2>List Transactions</h2>
=======
<h2 class='table-title'>List Transactions</h2>
>>>>>>> 28dd06facdba56d5077cabb666429104ecfbadbf
<table id="transactionListTable" class='table-data'>
<tr>
    <th>Transaction ID</th>
    <th>User Name</th>
    <th>Booked Graves</th>
    <th>Total Price</th>
    <th>Date</th>
    <th>Action</th>
</tr>
</table>
`
const createDashboardGravesTableTemplate = () => `
<<<<<<< HEAD
    <h2>Booked Graves</h2>
    <table id="graveListTable" class='table-data'>
        <tr id="graveA">
            <th>Graves A</th>
        </tr>
        <tr id="graveB">
            <th>Graves B</th>
        </tr>
        <tr id="graveC">
            <th>Graves C</th>
        </tr>
        <tr id="graveD">
            <th>Graves D</th>
        </tr>
        <tr id="graveE">
            <th>Graves E</th>
=======
    <h2 class='table-title'>Booked Slots</h2>
    <table id="graveListTable" class='table-data'>
        <tr id="blokA">
            <th class='blok-th'>Blok A</th>
            <td id='blokA-data'></td>
        </tr>
        <tr id="blokB">
            <th class='blok-th'>Blok B</th>
            <td id='blokB-data'></td>
        </tr>
        <tr id="blokC">
            <th class='blok-th'>Blok C</th>
            <td id='blokC-data'></td>
        </tr>
        <tr id="blokD">
            <th class='blok-th'>Blok D</th>
            <td id='blokD-data'></td>
        </tr>
        <tr id="blokE">
            <th class='blok-th'>Blok E</th>
            <td id='blokE-data'></td>
>>>>>>> 28dd06facdba56d5077cabb666429104ecfbadbf
        </tr>
    </table>
`

<<<<<<< HEAD
const createEditGravesDashboardTemplate = (tomb) => `
    <h2>Edit Blok A Graves</h2>
    <input type="hidden" id="hfRowIndex" value="" />
    <table id="editGravesA" class="table-data">
=======
const createEditGravesDashboardTemplate = (initial) => `
    <h2 class='table-title'>Blok ${initial}</h2>
    <table id="blokListTable" class="table-data">
>>>>>>> 28dd06facdba56d5077cabb666429104ecfbadbf
        <tr>
            <th>ID</th>
            <th>Available</th>
            <th>Action</th>
        </tr>
    </table>
`

export {
  createLayoutDashboard,
  createDashboardUserTableTemplate,
  createDashboardTransactionTableTemplate,
  createDashboardGravesTableTemplate,
<<<<<<< HEAD
  createEditGravesDashboardTemplate
=======
  createEditGravesDashboardTemplate,
>>>>>>> 28dd06facdba56d5077cabb666429104ecfbadbf
  createSearchFilterDataTemplate
}
