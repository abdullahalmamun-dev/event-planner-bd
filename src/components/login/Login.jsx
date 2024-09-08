import React from "react";

const Login = () => {
  return (
    <div>
      <div class="flex flex-col w-full gap-10">
        <div class="flex flex-col w-1/2">
          <div class="bg-gray-800 p-10 rounded-lg">
            <div class="text-white text-center text-2xl font-bold mb-4">
              COMMUNICATION, EDUCATION &
            </div>
            <div class="text-white text-center text-4xl font-bold">RECENT</div>
            <div class="text-white text-center text-4xl font-bold">NEWS</div>
            <div class="text-gray-400 text-center mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>
          </div>
          <div class="bg-gray-200 p-10 rounded-lg relative">
            <div class="absolute top-0 left-0 bg-gray-800 p-2 rounded-lg text-white">
              DESIGN
            </div>
            <img
              src="https://picsum.photos/id/1024/300/300"
              class="w-full rounded-lg"
            ></img>
            <div class="text-gray-800 text-center mt-4">
              MARCH 17, 2017 - By Donald Rafael
            </div>
            <div class="text-gray-800 text-center font-bold">
              Coast Art Show Reveals a Diverse World of Cultural Exchange
            </div>
          </div>
        </div>
        <div class="flex flex-col w-1/2">
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-2">
              <div class="text-gray-800 font-bold">
                The beautiful & modern styling trend
              </div>
              <div class="text-gray-500">By Donald Rafael</div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="text-gray-800 font-bold">
                Building a Deeper Narrative: Photography at Republicca
              </div>
              <div class="text-gray-500">By Donald Rafael</div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="text-gray-800 font-bold">
                Runs towards the Maybury
              </div>
              <div class="text-gray-500">By Donald Rafael</div>
            </div>
            <div class="flex flex-col gap-2">
              <div class="text-gray-800 font-bold">Miles from Oregon</div>
              <div class="text-gray-500">By Donald Rafael</div>
            </div>
          </div>
          <div class="flex flex-col gap-5">
            <div class="flex flex-col gap-2 relative">
              <div class="absolute top-0 left-0 bg-gray-800 p-2 rounded-lg text-white">
                LIFESTYLE
              </div>
              <img
                src="https://picsum.photos/id/1015/300/300"
                class="w-full rounded-lg"
              ></img>
              <div class="text-gray-800 font-bold">
                5 Contemporary Tattoo Artists That You Will Love
              </div>
              <div class="text-gray-500">By Donald Rafael</div>
            </div>
            <div class="flex flex-col gap-2 relative">
              <div class="absolute top-0 left-0 bg-gray-800 p-2 rounded-lg text-white">
                DESIGN
              </div>
              <img
                src="https://picsum.photos/id/1011/300/300"
                class="w-full rounded-lg"
              ></img>
              <div class="text-gray-800 font-bold">
                Born to design & produce
              </div>
              <div class="text-gray-500">By Donald Rafael</div>
            </div>
            <div class="flex flex-col gap-2 relative">
              <div class="absolute top-0 left-0 bg-gray-800 p-2 rounded-lg text-white">
                UNCATEGORIZED
              </div>
              <img
                src="https://picsum.photos/id/1014/300/300"
                class="w-full rounded-lg"
              ></img>
              <div class="text-gray-800 font-bold">
                Painting from nature is not copying the object; it is realizing
                one's sensations.
              </div>
              <div class="text-gray-500">By Donald Rafael</div>
            </div>
            <div class="flex flex-col gap-2 relative">
              <div class="absolute top-0 left-0 bg-gray-800 p-2 rounded-lg text-white">
                PAINTINGS
              </div>
              <img
                src="https://picsum.photos/id/1012/300/300"
                class="w-full rounded-lg"
              ></img>
              <div class="text-gray-800 font-bold">
                14 Things You Didn't Know About the Mona Lisa
              </div>
              <div class="text-gray-500">By Donald Rafael</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
