export const CreateProject = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
        <svg width={size || width} 
        height={size || height}
         viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Combined-Shape" fill={fill} transform="translate(64.000000, 34.346667)">
                    <path d="M192,-7.10542736e-15 L384,110.851252 L384,242.986 L341.333,242.986 L341.333,157.655 L213.333,231.555 L213.333,431.088 L192,443.405007 L0,332.553755 L0,110.851252 L192,-7.10542736e-15 Z M341.333333,264.32 L341.333,328.32 L405.333333,328.32 L405.333333,370.986667 L341.333,370.986 L341.333333,434.986667 L298.666667,434.986667 L298.666,370.986 L234.666667,370.986667 L234.666667,328.32 L298.666,328.32 L298.666667,264.32 L341.333333,264.32 Z M42.666,157.654 L42.6666667,307.920144 L170.666,381.82 L170.666,231.555 L42.666,157.654 Z M192,49.267223 L66.1333333,121.936377 L192,194.605531 L317.866667,121.936377 L192,49.267223 Z">
                    </path>
                </g>
            </g>
         </svg>
    );
};

export const CreateGroup = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
    <svg width={size || width} height={size || height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="2.5" stroke={fill} stroke-linecap="round"/>
    <path d="M11.7679 8.5C12.0332 8.04063 12.47 7.70543 12.9824 7.56815C13.4947 7.43086 14.0406 7.50273 14.5 7.76795C14.9594 8.03317 15.2946 8.47 15.4319 8.98236C15.5691 9.49472 15.4973 10.0406 15.2321 10.5C14.9668 10.9594 14.53 11.2946 14.0176 11.4319C13.5053 11.5691 12.9594 11.4973 12.5 11.2321C12.0406 10.9668 11.7054 10.53 11.5681 10.0176C11.4309 9.50528 11.5027 8.95937 11.7679 8.5L11.7679 8.5Z" stroke={fill}/>
    <path d="M13.4054 17.507L13.8992 17.4282L13.4054 17.507ZM12.5 18H3.50002V19H12.5V18ZM3.08839 17.5857C3.21821 16.7717 3.53039 15.6148 4.26396 14.671C4.97934 13.7507 6.11871 13 8.00002 13V12C5.80109 12 4.37371 12.9004 3.47442 14.0573C2.59334 15.1909 2.24293 16.5374 2.10087 17.4282L3.08839 17.5857ZM8.00002 13C9.88133 13 11.0207 13.7507 11.7361 14.671C12.4697 15.6148 12.7818 16.7717 12.9117 17.5857L13.8992 17.4282C13.7571 16.5374 13.4067 15.1909 12.5256 14.0573C11.6263 12.9004 10.199 12 8.00002 12V13ZM3.50002 18C3.20827 18 3.05697 17.7827 3.08839 17.5857L2.10087 17.4282C1.95832 18.322 2.6872 19 3.50002 19V18ZM12.5 19C13.3128 19 14.0417 18.322 13.8992 17.4282L12.9117 17.5857C12.9431 17.7827 12.7918 18 12.5 18V19Z" fill={fill}/>
    <path d="M17.2966 17.4162L16.8116 17.5377L17.2966 17.4162ZM11.8004 13.9808L11.5324 13.5586L11.0173 13.8855L11.4391 14.3264L11.8004 13.9808ZM13.4054 17.507L13.8992 17.4282L13.4054 17.507ZM16.3951 18H12.5V19H16.3951V18ZM16.8116 17.5377C16.8654 17.7526 16.7076 18 16.3951 18V19C17.2658 19 18.0152 18.2277 17.7816 17.2948L16.8116 17.5377ZM13.5001 14C14.5278 14 15.2496 14.5027 15.7784 15.2069C16.3178 15.9253 16.6345 16.8306 16.8116 17.5377L17.7816 17.2948C17.5905 16.5315 17.2329 15.4787 16.5781 14.6065C15.9126 13.7203 14.9202 13 13.5001 13V14ZM12.0683 14.4029C12.4581 14.1556 12.9262 14 13.5001 14V13C12.732 13 12.0787 13.2119 11.5324 13.5586L12.0683 14.4029ZM11.4391 14.3264C12.3863 15.3166 12.7647 16.6646 12.9116 17.5857L13.8992 17.4282C13.7397 16.4285 13.3158 14.8416 12.1617 13.6351L11.4391 14.3264ZM12.9116 17.5857C12.9431 17.7827 12.7918 18 12.5 18V19C13.3128 19 14.0417 18.322 13.8992 17.4282L12.9116 17.5857Z" fill={fill}/>
    <rect x="16.25" y="5.25" width="4.5" height="0.5" rx="0.25" stroke={fill} stroke-width="0.5" stroke-linecap="round"/>
    <rect x="18.75" y="3.25" width="4.5" height="0.5" rx="0.25" transform="rotate(90 18.75 3.25)" stroke={fill} stroke-width="0.5" stroke-linecap="round"/>
    </svg>
);
};

export const Edit = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
        <svg width={size || width} 
        height={size || height} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
            <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" 
            stroke={fill} 
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"/>
            <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" 
            stroke={fill} 
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"/>
        </svg>
    );
    
};

export const Add = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
        <svg 
            width={size || width} 
            height={size || height} 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none"
            {...props}
        >
            <rect 
                data-name="--Rectangle" 
                fill="none" 
                height="20" 
                id="_--Rectangle" 
                rx="2" 
                ry="2" 
                stroke={fill} 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="1.5" 
                width="20" 
                x="2" 
                y="2"
            />
            <line 
                fill="none" 
                stroke={fill} 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="1.5" 
                x1="15.5" 
                x2="8.5" 
                y1="12" 
                y2="12"
            />
            <line 
                fill="none" 
                stroke={fill} 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="1.5" 
                x1="12" 
                x2="12" 
                y1="15.5" 
                y2="8.5"
            />
        </svg>
    );
};

export const EditProject = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
        <svg 
            width={size || width} 
            height={size || height} 
            viewBox="0 0 70 70" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            {...props}
        >
            <g stroke-width="0"></g>
            <g stroke-linecap="round" stroke-linejoin="round"></g>
            <g>
                <g>
                    <path 
                        d="M57.583,34.959c-1.104,0-2,0.896-2,2v25.624h-49v-49H32.41c1.104,0,2-0.896,2-2s-0.896-2-2-2h-27 c-1.104,0-2.827,1.271-2.827,2.376v53c0,1.104,1.722,1.624,2.827,1.624h53c1.104,0,1.174-0.52,1.174-1.624v-28 C59.583,35.854,58.688,34.959,57.583,34.959z" 
                        fill={fill}
                    />
                    <path 
                        d="M66.253,13.116L57.769,4.63c-0.75-0.75-1.768-1.172-2.829-1.172c-1.061,0-2.078,0.421-2.828,1.172L17.648,39.093 c-0.459,0.458-0.799,1.021-0.992,1.642l-3.543,11.404c-0.427,1.375-0.082,2.874,0.904,3.924c0.765,0.815,1.825,1.263,2.916,1.263 c0.314,0,0.63-0.037,0.943-0.112l12.028-2.918c0.714-0.174,1.366-0.54,1.885-1.06l34.462-34.463 C67.814,17.211,67.814,14.679,66.253,13.116z M48.575,13.822l1.414,1.415L23.17,42.057l-1.415-1.415L48.575,13.822z M51.403,16.651 l2.829,2.829L27.413,46.3l-2.829-2.829L51.403,16.651z M16.933,53.325l1.132-3.645l2.712,2.712L16.933,53.325z M23.054,51.84 l-4.318-4.316l1.676-5.396l6.293,6.293l0,0.001c0,0,0,0,0.001,0.001l2.038,2.038L23.054,51.84z M30.241,49.128l-1.414-1.414 l26.82-26.82l1.414,1.414L30.241,49.128z M58.475,20.894l-8.485-8.485l4.95-4.95l8.484,8.486L58.475,20.894z" 
                        fill={fill}
                    />
                    <path 
                        d="M34.41,55.583c0,0.553,0.447,1,1,1h14c0.553,0,1-0.447,1-1s-0.447-1-1-1h-14C34.857,54.583,34.41,55.03,34.41,55.583z" 
                        fill={fill}
                    />
                    <path 
                        d="M39.409,49.583c0,0.553,0.447,1,1,1h9c0.553,0,1-0.447,1-1s-0.447-1-1-1h-9C39.856,48.583,39.409,49.03,39.409,49.583z" 
                        fill={fill}
                    />
                    <path 
                        d="M49.409,45.583c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4c-0.553,0-1,0.447-1,1s0.447,1,1,1H49.409z" 
                        fill={fill}
                    />
                </g>
            </g>
        </svg>
    );
};

export const EditGroup = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
        <svg 
            width={size || width} 
            height={size || height} 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            {...props}
        >
            <path 
                d="M2,21H8a1,1,0,0,0,0-2H3.071A7.011,7.011,0,0,1,10,13a5.044,5.044,0,1,0-3.377-1.337A9.01,9.01,0,0,0,1,20,1,1,0,0,0,2,21ZM10,5A3,3,0,1,1,7,8,3,3,0,0,1,10,5ZM20.207,9.293a1,1,0,0,0-1.414,0l-6.25,6.25a1.011,1.011,0,0,0-.241.391l-1.25,3.75A1,1,0,0,0,12,21a1.014,1.014,0,0,0,.316-.051l3.75-1.25a1,1,0,0,0,.391-.242l6.25-6.25a1,1,0,0,0,0-1.414Zm-5,8.583-1.629.543.543-1.629L19.5,11.414,20.586,12.5Z" 
                fill={fill}
            />
        </svg>
    );
};

export const ProfileIcon = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
        <svg 
            width={size || width} 
            height={size || height} 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            {...props}
        >
            <path 
                d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" 
                stroke={fill} 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
            <path 
                d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" 
                stroke={fill} 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
            <path 
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                stroke={fill} 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const LogoutIcon = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
        <svg 
            width={size || width} 
            height={size || height} 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            {...props}
        >
            <path 
                d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" 
                stroke={fill} 
                stroke-width="1.5" 
                stroke-linecap="round"
            />
            <path 
                d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15" 
                stroke={fill} 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const ChevronDown = ({fill = "currentColor", size, height, width, ...props}) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const ShowPassword = (props) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
      >
        <path
          d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
          fill="currentColor"
        />
        <path
          d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
          fill="currentColor"
        />
        <path
          d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
          fill="currentColor"
        />
        <path
          d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
          fill="currentColor"
        />
        <path
          d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
          fill="currentColor"
        />
      </svg>
    );
};

export const HiddenPassword = (props) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
      >
        <path
          d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
          fill="currentColor"
        />
        <path
          d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
          fill="currentColor"
        />
      </svg>
    );
};

export const DeleteIcon = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
      <svg
        width={size || width}
        height={size || height}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
      >
        <path
          d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
        <path
          d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
        <path
          d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
        <path
          d="M8.60834 13.75H11.3833"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
        <path
          d="M7.91669 10.4167H12.0834"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        />
      </svg>
    );
};

export const EditIcon = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
        <svg
            width={size || width}
            height={size || height}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            {...props}
        >
            <path
                d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
            <path
                d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
            <path
                d="M2.5 18.3333H17.5"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const PlusIcon = ({size = 24, width, height, ...props}) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={size || height}
        role="presentation"
        viewBox="0 0 24 24"
        width={size || width}
        {...props}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <path d="M6 12h12" />
          <path d="M12 18V6" />
        </g>
      </svg>
    );
};

export const SearchIcon = (props) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
};

export const CancelIcon = ({fill = "currentColor", size, height, width, ...props}) => {
    return (
        <svg 
            width={size || width} 
            height={size || height} 
            viewBox="0 0 512 512" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            {...props}
        >
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="work-case" fill={fill} transform="translate(91.520000, 91.520000)">
                    <polygon 
                        id="Close" 
                        points="328.96 30.2933333 298.666667 0 164.48 134.4 30.2933333 0 0 30.2933333 134.4 164.48 0 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
                    />
                </g>
            </g>
        </svg>
    );
};

  