<script>
  import { Router, Route } from 'svelte-routing';
  import Navbar from './Navbar.svelte';
  import MainMenu from './MainMenu.svelte';
  import Footer from './Footer.svelte';
  import Login from './login/+page.svelte';
</script>

<Router>
  <Route path="/login" component={Login} />
</Router>

<div class="header">
  <Navbar />
</div>

<div class="mt-10 body">
  <MainMenu />
</div>

<div>
  <Footer />
</div>
