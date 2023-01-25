document.write(`
<header class="h-16 bg-blue-200 drop-shadow">
    <div
        class="container px-4 md:px-0 mx-auto flex justify-between items-center"
    >
        <!-- Logo -->
        <a class="flex items-center">
            <img
                src="../public/images/LogoCentro.png"
                class="mr-3 h-6 sm:h-9"
                alt="CCM Logo"
            />
        </a>
        <div class="block justify-between items-center lg:flex lg:w-auto">
            <span
                class="pl-1 pr-1 py-2 text-white text-l uppercase font-bold rounded lg:bg-transparent lg:text-primary-700"
                id="navCenter1"
                >Panel
            </span>
            <br />
            <span
                class="pr-1 text-sky-700 text-l uppercase font-bold rounded lg:bg-transparent lg:text-primary-700 lg:p-0"
                id="navCenter2"
            >
            </span>
        </div>

        <!-- Menu links -->
        <ul
            id="menunav"
            class="hidden fixed top-0 right-0 px-10 py-16 rounded bg-sky-700 z-20 md:relative md:flex md:p-0 md:flex-row md:space-x-2"
        >
            <li class="md:hidden z-20 fixed top-2 right-6">
                <a
                    href="javascript:void(0)"
                    class="text-right text-white text-4xl"
                    onclick="toggleMenu()"
                    >&times;</a
                >
            </li>
            <li class="pt-4 pb-2 px-2">
                <a href="#">
                    <div class="flex items-center">
                        <div class="shrink-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
                                class="rounded-full w-10"
                                alt="Avatar"
                            />
                        </div>
                        <div class="grow ml-3">
                            <p class="text-sm font-semibold text-white rounded">
                                Nombre Usuariooooo
                            </p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <div class="flex items-center md:hidden">
            <button
                class="text-white text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
                onclick="toggleMenu()"
            >
                &#9776;
            </button>
        </div>
    </div>
</header>
<div id="content" class="pl-2 duration-200 h-screen bg-gray-50">
    <div
        id="menu"
        class="nav h-full w-0 fixed flex flex-col left-0 bg-white opacity-90 overflow-x-hidden pt-8 duration-200 border-r"
    >
        <a
            href="#"
            class="close block pr-2 text-[25px] no-underline text-red-400 hover:text-red-900 duration-200 absolute top-0 right-0 ml-12"
            onclick="closeSlideMenu()"
        >
            <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                id="chevron-double-left"
                class="w-8 h-8 text-cool-gray-800 dark:text-cool-gray-200 hover:bg-red-300 hover:rounded"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                ></path>
            </svg>
        </a>
        <ul class="flex flex-col py-4 space-y-1">
            <li class="px-5">
                <div class="flex flex-row items-center h-8">
                    <div class="text-sm font-light tracking-wide text-gray-900">
                        Menú
                    </div>
                </div>
            </li>
            <li>
                <a
                    href="./menuprincipal.html"
                    class="relative flex flex-row items-center h-11 hover:bg-gray-200 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onclick="selectOption('Menú:','Principal')"
                >
                    <span class="inline-flex justify-center items-center ml-4">
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            ></path>
                        </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Principal</span>
                    <span
                        class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full"
                        >1</span
                    >
                </a>
            </li>
            <li>
                <a
                    href="#"
                    class="relative flex flex-row items-center h-11 hover:bg-gray-200 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onclick="selectOption('Menú:','Mensajes')"
                >
                    <span class="inline-flex justify-center items-center ml-4">
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            ></path>
                        </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Mensajes</span>
                    <span
                        class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-500 bg-green-50 rounded-full"
                        >1</span
                    >
                </a>
            </li>
            <li>
                <a
                    href="#"
                    class="relative flex flex-row items-center h-11 hover:bg-gray-200 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onclick="selectOption('Menú:','Notificaciones')"
                >
                    <span class="inline-flex justify-center items-center ml-4">
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            ></path>
                        </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate"
                        >Notificaciones</span
                    >
                    <span
                        class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full"
                        >1</span
                    >
                </a>
            </li>
            <li>
                <a
                    href="./examenes.html"
                    class="relative flex flex-row items-center h-11 hover:bg-gray-200 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onclick="selectOption('Menú:','Examenes')"
                >
                    <span class="inline-flex justify-center items-center ml-4">
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                            ></path>
                        </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Examenes</span>
                </a>
            </li>

            <li class="px-5">
                <div class="flex flex-row items-center h-8">
                    <div class="text-sm font-light tracking-wide text-gray-900">
                        Configuración
                    </div>
                </div>
            </li>
            <li>
                <a
                    href="./perfil.html"
                    class="relative flex flex-row items-center h-11 hover:bg-gray-200 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onclick="selectOption('Configuración:','Perfil')"
                >
                    <span class="inline-flex justify-center items-center ml-4">
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                        </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate">Perfil</span>
                </a>
            </li>
            <li>
                <a
                    href="#"
                    class="relative flex flex-row items-center h-11 hover:bg-gray-200 text-gray-900 hover:text-gray-800 border-l-4 border-transparent hover:border-blue-500 pr-6 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onclick="selectOption('Configuración:','Cerrar Sesión')"
                >
                    <span class="inline-flex justify-center items-center ml-4">
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            ></path>
                        </svg>
                    </span>
                    <span class="ml-2 text-sm tracking-wide truncate"
                        >Cerrar Sesión</span
                    >
                </a>
            </li>
        </ul>
    </div>
    <span class="slide">
        <a
            href="#"
            class="close block w-16 max-w-xs text-xl text-blue-500 hover:text-sky-800 duration-200 no-underline mr-8 right-0 border-b"
            onclick="openSlideMenu()"
        >
            <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                id="menu"
                class="w-8 h-8 text-cool-gray-800 dark:text-cool-gray-200 hover:bg-blue-300 hover:rounded"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                ></path>
            </svg>
        </a>
    </span>
`);
