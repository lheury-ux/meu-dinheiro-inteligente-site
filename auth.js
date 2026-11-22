import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
const config = window.MDI_CONFIG || {};
const ready = /^https:\/\/.+\.supabase\.co$/.test(config.supabaseUrl || '') && !!config.supabasePublishableKey;
const setup = document.getElementById('setup');
const status = document.getElementById('status');
const form = document.getElementById('authForm');
const logged = document.getElementById('logged');
const signUp = document.getElementById('signUp');
const logout = document.getElementById('logout');
let client;
function message(s){status.textContent=s}
function render(user){form.classList.toggle('hide',!!user);logged.classList.toggle('hide',!user);if(user)message(`Conectado como ${user.email||'usuário'}`)}
if(!ready){form.querySelectorAll('input,button').forEach(el=>el.disabled=true);message('Configure o Supabase para habilitar o login.')}else{
  setup.classList.add('hide');
  client=createClient(config.supabaseUrl,config.supabasePublishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
  client.auth.getUser().then(({data,error})=>{if(error)message('Não foi possível verificar a sessão.');else render(data.user)});
  client.auth.onAuthStateChange((_event,session)=>render(session?.user));
  form.addEventListener('submit',async e=>{e.preventDefault();message('Entrando...');const {error}=await client.auth.signInWithPassword({email:email.value.trim(),password:password.value});if(error)message('Não foi possível entrar. Verifique seu e-mail e sua senha.');else message('Login realizado com sucesso.')});
  signUp.addEventListener('click',async()=>{if(!form.reportValidity())return;message('Criando conta...');const {error}=await client.auth.signUp({email:email.value.trim(),password:password.value});message(error?'Não foi possível criar a conta. Verifique os dados e as configurações.':'Cadastro solicitado. Se necessário, confirme o e-mail para entrar.')});
  logout.addEventListener('click',async()=>{await client.auth.signOut();message('Você saiu da conta.')});
}
