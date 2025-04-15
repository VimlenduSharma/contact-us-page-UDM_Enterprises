
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Facebook, Instagram, Twitter, Mail, Phone, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  budget: z.string(),
});

const Index = () => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-purple-900">UDM</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">About Us</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Brands</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Ongoing Campaigns</a>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors">Login</button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
              Get in touch with us.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 animate-fade-in delay-100">
              We're here to assist you.
            </p>
          </div>

          {/* Form Section */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-purple-100">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      {...form.register("name")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/50"
                      placeholder="Your Name"
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      {...form.register("email")}
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/50"
                      placeholder="Email Address"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      {...form.register("phone")}
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/50"
                      placeholder="Phone Number"
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      {...form.register("company")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/50"
                      placeholder="Company / Influencer Name"
                    />
                    {form.formState.errors.company && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.company.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      {...form.register("budget")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/50"
                      placeholder="Do you have any specific Budget for the campaign?"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
                >
                  {form.formState.isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <MessageSquare className="w-5 h-5" />
                      <span>Leave us a Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-12">
              <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-purple-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  We are always happy to assist you
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Address</h3>
                      <p className="text-gray-600">help@info.com</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Assistance hours:<br />
                        Monday - Friday 6 am to 8 pm EST
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone Number</h3>
                      <p className="text-gray-600">help@info.com</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Assistance hours:<br />
                        Monday - Friday 6 am to 8 pm EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900 text-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold mb-4">Subscribe to Our Plans</h2>
                <p className="text-purple-200 mb-6">
                  Get weekly updates about our product on your email, no spam guaranteed
                </p>
                <form className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="youremail123@gmail.com"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-purple-700 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-white text-purple-900 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-900 mb-4">NEEMAN'S</h3>
              <p className="text-gray-600">A trusted market agency</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">COMPANY</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600">About us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Partner program</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Career</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Contact us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">FEATURES</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Pricing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Reviews</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Direct Mail Academy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Success stories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600">Terms & conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">CONTACT</h4>
              <p className="text-gray-600 mb-4">support@postpilot.com</p>
              <p className="text-gray-600">Made with ❤️</p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-600 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© 2024 UDM Inc. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="px-4 py-2 text-gray-700 hover:text-purple-600 transition-colors">Login</button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Try it for free
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
