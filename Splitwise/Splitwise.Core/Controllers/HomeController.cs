using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Splitwise.DomainModel.Models;
using Splitwise.Repository;
using System.Threading.Tasks;

namespace Splitwise.Core.Controllers
{
    public class HomeController : Controller
    {
        #region Private Variable

        #region Dependencies

        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        #endregion

        #endregion


        #region Constructors

        public HomeController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
        }

        #endregion


        #region Public Methods

        public IActionResult Index()
        {
            if (User.Identity.IsAuthenticated)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Login", "Home");
            }
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromForm] UserLoginAC loginFormData)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByNameAsync(loginFormData.UserName);

                if (user != null)
                {
                    var result = await _signInManager.PasswordSignInAsync(loginFormData.UserName, loginFormData.Password, false, false);

                    if (result.Succeeded)
                    {
                        return RedirectToAction("Index");
                    }
                    else
                    {
                        ModelState.AddModelError("", "Wrong Credentials!");
                    }
                }
                else
                {
                    ModelState.AddModelError("", "User Not Found");
                }
            }
            return View(loginFormData);
        }

        [HttpGet]
        public IActionResult Signup()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> SignUp([FromForm] UserSignUpAC signUpFormData)
        {
            if (ModelState.IsValid)
            {
                ApplicationUser user = await _userManager.FindByNameAsync(signUpFormData.UserName);

                if (user == null)
                {
                    ApplicationUser newUser = new ApplicationUser { UserName = signUpFormData.UserName, FullName = signUpFormData.FullName };
                    var result = await _userManager.CreateAsync(newUser, signUpFormData.Password);

                    if (result.Succeeded)
                    {
                        return RedirectToAction("Index");
                    }
                    else
                    {
                        foreach (var errors in result.Errors)
                        {
                            ModelState.AddModelError("", errors.Description);
                        }
                    }
                }
                else
                {
                    user.PasswordHash = _userManager.PasswordHasher.HashPassword(user, signUpFormData.Password);
                    var result = await _userManager.UpdateAsync(user);

                    if (result.Succeeded)
                    {
                        return RedirectToAction("Index");
                    }
                    else
                    {
                        foreach (var errors in result.Errors)
                        {
                            ModelState.AddModelError("", errors.Description);
                        }
                    }
                }
            }
            return View(signUpFormData);
        }

        //[HttpPost]
        public async Task<IActionResult> LogOut()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index");
        }

        #endregion
    }
}
