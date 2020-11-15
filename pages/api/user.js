
export function test(req, res){

	if (req.method === 'POST') {
  	console.log("test")
    // Process a POST request
  } else {
  console.log("test1")
    // Handle any other HTTP method
  }

}

export default function handler(req, res) {
  if (req.method === 'POST') {
  	console.log("test")
    // Process a POST request
  } else {
  console.log("test1")
    // Handle any other HTTP method
  }
}